import 'react-notion/src/styles.css'
import 'prismjs/themes/prism-tomorrow.css'
import { BlockMapType, NotionRenderer } from 'react-notion'
import { ListLayout } from '@/components'
import { GetStaticProps, GetStaticPaths } from 'next'
import { getTitles } from '@/utils'
import { AppProps } from 'next/app'

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
    fallback: false // or 'blocking' if you want to generate pages on demand
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const [data, posts] = await Promise.all([
    fetch(`https://notion-api.splitbee.io/v1/page/${params?.slug}`).then(
      (res) => res.json()
    ),
    fetch(
      `https://notion-api.splitbee.io/v1/page/${process.env.NOTION_PAGE_ID}`
    ).then((res) => res.json())
  ])

  return {
    props: {
      blockMap: data,
      posts
    }
  }
}

export default function Post({ blockMap }: { blockMap: BlockMapType }) {
  return (
    <>
      <div className='container mx-auto' style={{ maxWidth: 768 }}>
        <NotionRenderer blockMap={blockMap} />
      </div>
    </>
  )
}

Post.getLayout = function getLayout(page: AppProps) {
  return (
    <ListLayout title='Writing' blockMap={page.props.posts}>
      {page}
    </ListLayout>
  )
}
