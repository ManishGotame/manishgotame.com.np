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

    return <Post blockMap={data} title={title} link='/portfolio' />
  } catch {
    return (
      <div className='flex min-h-screen items-center justify-center flex-col gap-2'>
        <CloudAlertIcon className='w-10 h-10' />
        <h1 className='text-md font-medium'>Oh uh! Not Found</h1>
      </div>
    )
  }
}
