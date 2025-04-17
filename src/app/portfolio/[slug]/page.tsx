import { getBlockTitle } from 'notion-utils'
import { cn, notion } from '@/lib'
import { CloudAlertIcon } from 'lucide-react'
import { Post } from '@/components'
import { Roboto } from 'next/font/google'
import { portfolio } from '@/constants'

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
  display: 'swap'
})

export const revalidate = 30

export default async function Page({
  params,
  searchParams
}: {
  params: Promise<{ slug: string }>
  searchParams: Promise<{ id?: string | undefined }>
}) {
  try {
    const { slug } = await params
    const { id } = await searchParams
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
            <span
              className={cn(
                roboto.className,
                'text-sm uppercase tracking-wider text-gray-500'
              )}
            >
              PROJECT
            </span>
            <h1 className={cn(roboto.className, 'text-6xl font-light')}>
              {title}
            </h1>
            {id ? (
              <div className='text-gray-500'>
                {portfolio[parseInt(id)].tags?.join(' · ') || ''}
              </div>
            ) : null}
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
