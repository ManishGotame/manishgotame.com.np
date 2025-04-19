'use client'

import Link from 'next/link'
import { Footer, Header } from '@/components'
import { cn } from '@/lib'
import { IPortfolio } from '@/interfaces'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import { ChevronLeft } from 'lucide-react'
import { motion } from 'framer-motion'
import PortfolioCard from '@/components/home/portfolio/PortfolioCard'

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

  if (isPortfolioHome) {
    return (
      <>
        <div className='mt-20 flex flex-col gap-[138px] px-[30px] md:px-[30px] container max-w-5xl mx-auto'>
          <div className='flex flex-col'>
            <div className='flex flex-col mb-10'>
              <span className='font-bold text-lg'>{title}</span>
              <span className='font-regular text-gray-600 dark:text-gray-200'>
                Work I have done for my clients
              </span>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-10'>
              {portfolioItems.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <PortfolioCard key={index} {...project} id={index} />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
        <Footer />
      </>
    )
  }

  return (
    <div className='flex flex-row w-full'>
      <motion.div
        className={cn(
          'z-20 flex h-full max-h-screen min-h-screen flex-none transform flex-col overflow-y-auto border-r border-gray-150 bg-lotion pb-10 dark:border-gray-800 dark:bg-gray-900',
          'w-screen lg:relative lg:min-w-[25%] lg:w-auto',
          !isPortfolioHome && 'hidden lg:flex'
        )}
        initial={{ x: -300, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.2, ease: 'easeOut' }}
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
              description: each.mini_description,
              year: each.year,
              image: each.image,
              tags: each.tags
            }
            const isActive = pathname === item.href
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.2, delay: index * 0.05 }}
              >
                <Link
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
                      {item.description && (
                        <span className='text-gray-500 dark:text-gray-400 text-[13px]'>
                          {item.description}
                        </span>
                      )}
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
                    </div>
                  </div>
                </Link>
              </motion.div>
            )
          })}
        </div>
      </motion.div>

      <motion.div
        className='flex-1 w-full'
        initial={{ opacity: 1 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        {children}
      </motion.div>
    </div>
  )
}

export default PortfolioLayout
