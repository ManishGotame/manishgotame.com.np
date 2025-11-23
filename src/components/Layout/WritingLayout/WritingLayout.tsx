/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'

import Link from 'next/link'
import { Header } from '@/components'
import { cn } from '@/lib'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'
import { getYear } from 'date-fns'

type WritingLayoutProps = {
  title: string
  children: React.ReactNode
  blogPosts: any[]
}

const WritingLayout: React.FC<WritingLayoutProps> = ({
  title,
  children,
  blogPosts
}) => {
  const pathname = usePathname()
  const isWritingHome = pathname === '/writing'

  if (!blogPosts) {
    return null
  }

  return (
    <div className='flex flex-row w-full'>
      <div
        className={cn(
          'z-20 flex h-full max-h-screen min-h-screen flex-none transform flex-col overflow-y-auto border-r border-gray-150 bg-lotion pb-10 dark:border-gray-800 dark:bg-gray-900',
          'w-screen lg:relative lg:min-w-[25%] lg:w-auto',
          !isWritingHome && 'hidden lg:flex'
        )}
      >
        <div className='sticky top-0 z-10 flex flex-row items-center justify-between gap-2'>
          <div className='flex-1'>
            <Header title={title} />
          </div>
        </div>
        <div className='px-3 py-2'>
          {blogPosts.map((each, index) => {
            const item = {
              href: `/writing/${each.slug}`,
              label: each.title,
              date: each.date
            }
            const isActive = pathname === item.href
            const showYear =
              index === 0 ||
              getYear(item.date) !== getYear(blogPosts[index - 1].date)

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.25, delay: index * 0.05 }}
              >
                {showYear && (
                  <span className='text-[14px] font-medium px-2 text-gray-500'>
                    {getYear(item.date)}
                  </span>
                )}
                <Link
                  key={index}
                  href={item.href}
                  className={cn(
                    'cursor-pointer my-1 gap-1 flex flex-1 flex-col space-x-3 rounded-md px-2 py-[10px] text-[14px] font-medium',
                    isActive
                      ? 'bg-gray-200 text-gray-900 dark:bg-gray-700 dark:text-white'
                      : 'text-gray-900 dark:text-white hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-800 dark:hover:text-white'
                  )}
                >
                  <div className='flex flex-col'>
                    <span>{item.label}</span>
                    <span className='text-gray-500 dark:text-gray-400 text-[13px]'>
                      {item.date}
                    </span>
                  </div>
                </Link>
              </motion.div>
            )
          })}
        </div>
      </div>

      <div className={cn('flex-1', !isWritingHome && 'w-full')}>{children}</div>
    </div>
  )
}

export default WritingLayout
