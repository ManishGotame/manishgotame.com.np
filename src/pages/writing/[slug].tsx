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

import { Header, WritingSidebar } from '@/components'
import { cn, getTitles } from '@/lib'
import React, { useEffect, useState } from 'react'
import { ChevronLeft } from 'lucide-react'

interface PostProps {
  blockMap: ExtendedRecordMap
  posts: BlockMap
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

export default function Post({ blockMap, posts }: PostProps) {
  const router = useRouter()
  const keys = Object.keys(blockMap?.block || {})
  const block = blockMap?.block?.[keys[0]]?.value
  const title = getBlockTitle(block, blockMap)
  const [showFixedTitle, setShowFixedTitle] = useState(false)
  const [openSidebar, setOpenSidebar] = useState(false)
  const titleRef = React.useRef<HTMLDivElement>(null)
  const { theme } = useTheme()

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setShowFixedTitle(!entry.isIntersecting)
      },
      {
        threshold: 0
      }
    )

    if (titleRef.current) {
      observer.observe(titleRef.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    window.scrollTo(0, 0)
    setOpenSidebar(false)
  }, [router.asPath])

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024 && openSidebar) {
        setOpenSidebar(false)
      }
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [openSidebar])

  if (router.isFallback) {
    return (
      <div className='flex items-center justify-center min-h-screen'>
        <div className='text-xl font-semibold'>Loading...</div>
      </div>
    )
  }

  if (!blockMap) {
    return (
      <div className='flex items-center justify-center min-h-screen'>
        <div className='text-xl font-semibold'>Page not found</div>
      </div>
    )
  }

  return (
    <div className='flex'>
      <WritingSidebar blockMap={posts} title='Writing' open={openSidebar} />
      <div className='overflow-y-scroll h-screen flex-1'>
        <div className='absolute p-5 top-0 left-0'>
          <ChevronLeft
            className='w-5 h-5 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg block lg:hidden'
            onClick={() => setOpenSidebar(!openSidebar)}
          />
        </div>
        <div
          className='flex flex-col justify-center items-center mt-20 mb-10 px-[16px]'
          ref={titleRef}
        >
          <h1 className='text-3xl font-semibold'>{title}</h1>
        </div>
        <div
          className={cn(
            'fixed w-[100%] top-0 z-10 flex flex-col justify-center transition-opacity duration-200',
            showFixedTitle ? 'block' : 'hidden',
            theme === 'dark'
              ? 'bg-gray-900/70  border-gray-800 backdrop-blur-sm'
              : 'bg-white/70 border-gray-200 backdrop-blur-sm'
          )}
        >
          <Header
            title={title}
            onClick={() => setOpenSidebar(!openSidebar)}
            backButton={true}
          />
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

  return page
}
