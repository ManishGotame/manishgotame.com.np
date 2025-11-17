import { getPage } from '@/lib'
import { NotFound, Post } from '@/components'
import { Metadata } from 'next'
import { getBlockTitle } from 'notion-utils'
import { getDatabase, extractNotionTableProperties } from '@/lib/notion'

type tParams = Promise<{ slug: string }>

export const revalidate = 30

export async function generateMetadata({
  params
}: {
  params: tParams
}): Promise<Metadata> {
  const { slug } = await params
  const posts = await getDatabase(process.env.NOTION_BLOG_DATABASE_ID as string)
  const newPosts = extractNotionTableProperties(posts)
  const matchedPost = newPosts.find((post) => post.slug === slug)

  return {
    title: `${matchedPost?.title} - Manish Gotame`,
    description: matchedPost?.description,
    openGraph: {
      type: 'article',
      title: `${matchedPost?.title} - Manish Gotame`,
      description: matchedPost?.description,
      images: [
        {
          url: 'https://personal-site.s3.ap-southeast-2.amazonaws.com/meta_small.jpg',
          width: 1200,
          height: 630
        }
      ],
      url: `https://manishgotame.com.np/writing/${slug}`,
      siteName: 'Manish Gotame'
    },
    twitter: {
      card: 'summary_large_image',
      site: '@manishgotame',
      creator: '@manishgotame',
      title: `${matchedPost?.title} - Manish Gotame`,
      description: matchedPost?.description,
      images: [
        {
          url: 'https://personal-site.s3.ap-southeast-2.amazonaws.com/meta_small.jpg',
          width: 1200,
          height: 630
        }
      ]
    }
  }
}

export default async function Page({ params }: { params: tParams }) {
  try {
    const { slug } = await params
    const posts = await getDatabase(
      process.env.NOTION_BLOG_DATABASE_ID as string
    )
    const newPosts = extractNotionTableProperties(posts)
    const matchedPost = newPosts.find((post) => post.slug === slug)
    const pageId = matchedPost?.id

    const data = await getPage(pageId)
    if (!data) return <NotFound />

    const keys = Object.keys(data?.block ?? {})
    const block = data.block?.[keys[0]]?.value
    const title = getBlockTitle(block, data) || ''

    return (
      <Post
        blockMap={data}
        title={title}
        link='/writing'
        header={
          <div className='flex flex-col gap-2'>
            <h1 className='text-3xl font-bold'>{title} </h1>
            <p className='text-md text-gray-500'>{matchedPost?.date}</p>
          </div>
        }
      />
    )
  } catch (e) {
    console.error(e)
    return <NotFound />
  }
}
