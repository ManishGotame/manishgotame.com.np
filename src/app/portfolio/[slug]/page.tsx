import { getBlockTitle } from 'notion-utils'
import { notion } from '@/lib'
import { CloudAlertIcon } from 'lucide-react'
import { Post } from '@/components'

type tParams = Promise<{ slug: string }>

export const revalidate = 30

export default async function Page({ params }: { params: tParams }) {
  try {
    const { slug } = await params
    const data = await notion.getPage(slug as string)

    const keys = Object.keys(data?.block || {})
    const block = data?.block?.[keys[0]]?.value
    const title = getBlockTitle(block, data)

    return (
      <Post
        blockMap={data}
        link='/portfolio'
        title={title}
        header={
          <div className='flex flex-col gap-4'>
            <span className='text-sm uppercase tracking-wider'>PROJECT</span>
            <h1 className='text-6xl font-light'>{title}</h1>
            <div className='text-gray-500'>Mobile · UI · UX · Wireframing</div>
          </div>
        }
      />
    )
  } catch {
    return (
      <div className='flex min-h-screen items-center justify-center flex-col gap-2'>
        <CloudAlertIcon className='w-10 h-10' />
        <h1 className='text-md font-medium'>Oh uh! Not Found</h1>
      </div>
    )
  }
}
