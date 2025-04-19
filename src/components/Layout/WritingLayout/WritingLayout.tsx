'use client'

import Link from 'next/link'
import { format } from 'date-fns'
import { Header, NotionIcon } from '@/components'
import { cn } from '@/lib'
import { ITitleResponse } from '@/interfaces'
import { usePathname } from 'next/navigation'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from '@/components/ui/tooltip'
import { useTheme } from '@/Providers'
import { motion } from 'framer-motion'

type WritingLayoutProps = {
  title: string
  children: React.ReactNode
  articleTitles: ITitleResponse[]
}

const WritingLayout: React.FC<WritingLayoutProps> = ({
  title,
  children,
  articleTitles
}) => {
  const pathname = usePathname()
  const { theme } = useTheme()
  const isWritingHome = pathname === '/writing'

  if (!articleTitles) {
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
          <div className='mr-3 z-20 relative group'>
            <TooltipProvider delayDuration={100}>
              <Tooltip>
                <TooltipTrigger>
                  <NotionIcon
                    height={20}
                    width={20}
                    color={theme === 'dark' ? '#fafafa' : '#000000'}
                  />
                </TooltipTrigger>
                <TooltipContent>
                  <p>Blog rendered using Notion.</p>
                  <Link
                    href='/writing/89d9bcb5-8937-465f-96ff-c869ca4c7726'
                    className='text-blue-400 underline text-xs'
                    rel='noopener noreferrer'
                  >
                    Read how I built it
                  </Link>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
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
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
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
                      {format(
                        new Date(Number(item.created_at)),
                        'dd MMM, yyyy'
                      )}
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
