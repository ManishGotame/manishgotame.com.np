'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { format } from 'date-fns'
import { BlockMap } from 'notion-types'
import { Header } from '@/components'
import { cn, getTitles } from '@/lib'

type SidebarProps = {
  blockMap: BlockMap
  title: string
  open: boolean
}

export default function WritingSidebar({
  blockMap,
  title,
  open = true
}: SidebarProps) {
  const pathname = usePathname()

  if (!blockMap) {
    return null
  }

  const articleTitles = getTitles(blockMap)

  return (
    <div
      className={cn(
        'z-20 flex h-full max-h-screen min-h-screen flex-none transform flex-col overflow-y-auto border-r border-gray-150 bg-lotion pb-10 transition duration-200 ease-in-out dark:border-gray-800 dark:bg-gray-900',

        open
          ? 'absolute translate-x-0 shadow-lg w-full'
          : 'absolute -translate-x-full',

        'lg:relative lg:translate-x-0 lg:min-w-[25%] lg:shadow-none'
      )}
    >
      <div className='sticky top-0 z-10 bg-lotion dark:bg-gray-900'>
        <Header title={title} />
      </div>
      <div className='px-3 py-2'>
        {articleTitles.map((each, index) => {
          const item = {
            href: `/writing/${each.id}`,
            label: each.title,
            created_at: each.created_at
          }
          const isActive = pathname === item.href
          return (
            <Link
              key={index}
              href={item.href}
              className={cn(
                'cursor-pointer my-1 gap-1 flex flex-1 flex-col space-x-3 rounded-md px-2 py-3 text-[14px] font-medium',
                isActive
                  ? 'bg-gray-200 text-gray-900 dark:bg-gray-700 dark:text-white'
                  : 'text-gray-900 dark:text-white hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-800 dark:hover:text-white'
              )}
            >
              <div className='flex flex-col'>
                <span>{item.label}</span>
                <span className='text-gray-500 dark:text-gray-300 text-[13px]'>
                  {format(new Date(Number(item.created_at)), 'dd MMM, yyyy')}
                </span>
              </div>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
