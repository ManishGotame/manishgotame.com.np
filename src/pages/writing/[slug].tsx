import 'prismjs/themes/prism-tomorrow.css'
import { GetStaticProps, GetStaticPaths } from 'next'
import { NotionRenderer } from 'react-notion-x'
import { useRouter } from 'next/router'
import { NotionAPI } from 'notion-client'
import 'react-notion-x/src/styles.css'
import { BlockMap, ExtendedRecordMap } from 'notion-types'
import { Code } from 'react-notion-x/build/third-party/code'
import { getBlockTitle } from 'notion-utils'
import { Collection } from 'react-notion-x/build/third-party/collection'
import { Equation } from 'react-notion-x/build/third-party/equation'
import { Modal } from 'react-notion-x/build/third-party/modal'
import { Pdf } from 'react-notion-x/build/third-party/pdf'
import { useTheme } from '@/Providers/ThemeProvider'

import { ListLayout } from '@/components'
import { getTitles } from '@/lib'
import React from 'react'

interface PostProps {
  blockMap: ExtendedRecordMap
}

export const getStaticPaths: GetStaticPaths = async () => {
  const notion = new NotionAPI()
  const recordMap = await notion.getPage(process.env.NOTION_PAGE_ID as string)
  const posts = recordMap.block
  const titles = getTitles(posts)

  const paths = titles.map((title) => ({
    params: {
      slug: title.id.toString()
    }
  }))

  return {
    paths,
    fallback: true
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  try {
    const notion = new NotionAPI()
    const data = await notion.getPage(params?.slug as string)
    const posts = await notion.getPage(process.env.NOTION_PAGE_ID as string)

    return {
      props: {
        blockMap: data,
        posts: posts.block
      },
      revalidate: 10 // Add ISR revalidation time in seconds
    }
  } catch {
    // If the page doesn't exist or there's an error, return notFound
    return {
      notFound: true
    }
  }
}

export default function Post({ blockMap }: PostProps) {
  const router = useRouter()
  const keys = Object.keys(blockMap?.block || {})
  const block = blockMap?.block?.[keys[0]]?.value
  const title = getBlockTitle(block, blockMap)
  const [showStickyTitle, setShowStickyTitle] = React.useState(false)
  const titleRef = React.useRef<HTMLDivElement>(null)
  const { theme } = useTheme()

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setShowStickyTitle(!entry.isIntersecting)
      },
      { threshold: 0 }
    )

    if (titleRef.current) {
      observer.observe(titleRef.current)
    }

    return () => observer.disconnect()
  }, [])

  // Show loading state when the fallback is being generated
  if (router.isFallback) {
    return (
      <div className='flex items-center justify-center min-h-screen'>
        <div className='text-xl font-semibold'>Loading...</div>
      </div>
    )
  }

  // Add error boundary for invalid blockMap
  if (!blockMap) {
    return (
      <div className='flex items-center justify-center min-h-screen'>
        <div className='text-xl font-semibold'>Page not found</div>
      </div>
    )
  }

  return (
    <div className='overflow-y-scroll h-screen'>
      <div
        className='flex flex-col justify-center items-center mt-20 mb-10'
        ref={titleRef}
      >
        <h1 className='text-4xl font-bold'>{title}</h1>
      </div>
      <div
        className={`sticky top-0 w-full z-10 text-ml font-bold p-5 border-b transition-opacity duration-200 ${
          showStickyTitle ? 'block' : 'hidden'
        } ${
          theme === 'dark'
            ? 'bg-black/70 border-gray-800 backdrop-blur-sm'
            : 'bg-white/70 border-gray-200 backdrop-blur-sm'
        }`}
      >
        {title}
      </div>
      <NotionRenderer
        recordMap={blockMap}
        darkMode={theme === 'dark'}
        disableHeader={true}
        components={{
          Code,
          Collection,
          Equation,
          Pdf,
          Modal
        }}
      />
    </div>
  )
}

type PageProps = {
  posts: BlockMap
}

Post.getLayout = function getLayout(page: React.ReactElement<PageProps>) {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router = useRouter()

  if (router.isFallback) {
    return <div>Loading...</div>
  }

  return (
    <ListLayout title='Writing' blockMap={page.props.posts}>
      {page}
    </ListLayout>
  )
}
