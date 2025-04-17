'use client'

import Link from 'next/link'
import { Header } from '@/components'
import { cn } from '@/lib'
import { IPortfolio } from '@/interfaces'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import { ChevronLeft } from 'lucide-react'

type PortfolioLayoutProps = {
  title: string
  children: React.ReactNode
  portfolioItems: IPortfolio[]
}

const PortfolioLayout: React.FC<PortfolioLayoutProps> = ({
  title,
  children,
  portfolioItems
}) => {
  const pathname = usePathname()
  const isPortfolioHome = pathname === '/portfolio'

  if (!portfolioItems) {
    return null
  }

  return (
    <div className='flex flex-row w-full'>
      <div
        className={cn(
          'z-20 flex h-full max-h-screen min-h-screen flex-none transform flex-col overflow-y-auto border-r border-gray-150 bg-lotion pb-10 dark:border-gray-800 dark:bg-gray-900',
          'w-screen lg:relative lg:min-w-[25%] lg:w-auto',
          !isPortfolioHome && 'hidden lg:flex'
        )}
      >
        <div className='sticky top-0 z-10 flex flex-row items-center justify-between gap-2'>
          {!isPortfolioHome && (
            <Link
              href='/portfolio'
              className='p-2 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white'
            >
              <ChevronLeft className='w-4 h-4' />
            </Link>
          )}
          <div className='flex-1'>
            <Header title={title} />
          </div>
        </div>
        <div className='px-3 py-2'>
          {portfolioItems.map((each, index) => {
            const item = {
              href: `/portfolio/${each.link}`,
              label: each.title,
              year: each.year,
              image: each.image,
              tags: each.tags
            }
            const isActive = pathname === item.href
            return (
              <Link
                key={index}
                href={`${item.href}?&id=${index}`}
                className={cn(
                  'cursor-pointer my-1 gap-1 flex flex-1 flex-col space-x-3 rounded-md px-2 py-[10px] text-[14px] font-medium',
                  isActive
                    ? 'bg-gray-200 text-gray-900 dark:bg-gray-700 dark:text-white'
                    : 'text-gray-900 dark:text-white hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-800 dark:hover:text-white'
                )}
              >
                <div className='flex flex-row items-center gap-2'>
                  {item.image ? (
                    <Image
                      src={item.image}
                      alt={item.label}
                      width={120}
                      height={67.5}
                      className='object-cover rounded'
                    />
                  ) : null}
                  <div className='flex flex-col'>
                    <span>{item.label}</span>
                    {item.tags && item.tags.length > 0 && (
                      <div className='flex flex-wrap gap-1 mt-1'>
                        {item.tags.map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className='px-1.5 py-0.5 text-xs rounded-sm bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300'
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                    <span className='text-gray-500 dark:text-gray-400 text-[13px]'>
                      {item.year}
                    </span>
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
      </div>

      <div className='flex-1 w-full'>{children}</div>
    </div>
  )
}

export default PortfolioLayout
