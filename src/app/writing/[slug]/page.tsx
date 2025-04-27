import { getPage, getTitles } from '@/lib'
import { CloudAlertIcon } from 'lucide-react'
import { Post } from '@/components'
import { format } from 'date-fns'
import { Metadata } from 'next'
import { getBlockTitle } from 'notion-utils'

type tParams = Promise<{ slug: string }>

export const revalidate = 30

export async function generateMetadata({
  params
}: {
  params: tParams
}): Promise<Metadata> {
  const { slug } = await params
  const data = await getPage(slug as string)
  const keys = Object.keys(data.block || {})
  const block = data.block?.[keys[0]]?.value
  const title = getBlockTitle(block, data) || ''

  return {
    title: title,
    openGraph: {
      type: 'article',
      title: title,
      images: [
        {
          url: 'https://personal-site.s3.ap-southeast-2.amazonaws.com/meta_img.png',
          width: 1200,
          height: 630
        }
      ],
      url: `https://manishgotame.com.np/writing/${slug}`, // Add full URL path
      siteName: 'Manish Gotame'
    },
    twitter: {
      card: 'summary_large_image',
      site: '@manishgotame',
      creator: '@manishgotame',
      title: title,
      images: [
        {
          url: 'https://personal-site.s3.ap-southeast-2.amazonaws.com/meta_img.png',
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
    const data = await getPage(slug as string)
    const postDetails = getTitles(data.block)[0]

    return (
      <Post
        blockMap={data}
        title={postDetails.title}
        link='/writing'
        header={
          <div className='flex flex-col gap-2'>
            <h1 className='text-3xl font-bold'>{postDetails.title} </h1>
            <p className='text-md text-gray-500'>
              {format(new Date(Number(postDetails.created_at)), 'dd MMM, yyyy')}
            </p>
          </div>
        }
      />
    )
  } catch (e) {
    console.error(e)
    return (
      <div className='flex min-h-screen items-center justify-center flex-col gap-2'>
        <CloudAlertIcon className='w-10 h-10' />
        <h1 className='text-md font-medium'>Post not found</h1>
      </div>
    )
  }
}
