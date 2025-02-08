import 'react-notion/src/styles.css'
import 'prismjs/themes/prism-tomorrow.css'
import { BlockMapType } from 'react-notion'
import { ListLayout } from '@/components'
import { GetStaticProps, GetStaticPaths } from 'next'
import { getTitles } from '@/utils'
import { NotionRenderer } from 'react-notion-x'
import { useRouter } from 'next/router'

import { NotionAPI } from 'notion-client'
// import dynamic from 'next/dynamic'
import 'react-notion-x/src/styles.css'
import { ExtendedRecordMap } from 'notion-types'

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await fetch(
    `https://notion-api.splitbee.io/v1/page/${process.env.NOTION_PAGE_ID}`
  ).then((res) => res.json())
  const titles = getTitles(posts)

  const paths = titles.map((title) => ({
    params: {
      slug: title.id.toString()
    }
  }))

  return {
    paths,
    fallback: true // or 'blocking' if you want to generate pages on demand
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  try {
    const notion = new NotionAPI()
    const data = await notion.getPage(params?.slug as string)
    const posts = await fetch(
      `https://notion-api.splitbee.io/v1/page/${process.env.NOTION_PAGE_ID}`
    ).then((res) => res.json())

    return {
      props: {
        blockMap: data,
        posts
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

export default function Post({ blockMap }: { blockMap: ExtendedRecordMap }) {
  const router = useRouter()
  console.log(router.isFallback)
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
    <>
      <NotionRenderer recordMap={blockMap} darkMode={true} />
    </>
  )
}

type PageProps = {
  posts: BlockMapType
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
