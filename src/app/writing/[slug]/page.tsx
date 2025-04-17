import { getTitles, notion } from '@/lib'
import { CloudAlertIcon } from 'lucide-react'
import { Post } from '@/components'
import { format } from 'date-fns'

type tParams = Promise<{ slug: string }>

export const revalidate = 30

export default async function Page({ params }: { params: tParams }) {
  try {
    const { slug } = await params
    const data = await notion.getPage(slug as string)
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
