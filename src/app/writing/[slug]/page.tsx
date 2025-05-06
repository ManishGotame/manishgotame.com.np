import { extractNotionTableProperties, getPage, getTitles } from '@/lib'
import { CloudAlertIcon } from 'lucide-react'
import { Post } from '@/components'
import { format } from 'date-fns'
import { Metadata } from 'next'
import {
  defaultMapImageUrl,
  getBlockTitle,
  getPageImageUrls,
  getPageProperty
} from 'notion-utils'
import { Client } from '@notionhq/client'

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

  const description =
    getPageProperty<string>('Description', block, data) || 'Writing'

  const socialImage = defaultMapImageUrl(
    getPageProperty<string>('Social Image', block, data),
    block
  )

  return {
    title: `${title} - Manish Gotame`,
    description: description,
    openGraph: {
      type: 'article',
      title: `${title} - Manish Gotame`,
      description: description,
      images: [
        {
          url: socialImage,
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
      title: `${title} - Manish Gotame`,
      description: description,
      images: [
        {
          url: socialImage,
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

    const notion = new Client({
      auth: ''
    })

    // const notion = new Client({
    //   auth: '035d9925-7116-4561-b1c6-f6d7c7cbc4ec'
    // })

    const { results } = await notion.databases.query({
      database_id: '1e90afa84937806fa66cec651fba4a0f'
    })

    console.log('before', results[0])
    console.log('results', extractNotionTableProperties(results)[0])

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
