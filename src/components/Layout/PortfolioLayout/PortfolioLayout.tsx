'use client'

import Link from 'next/link'
import { Footer, Header } from '@/components'
import { cn } from '@/lib'
import { IPortfolio } from '@/interfaces'
import { usePathname, useSearchParams, useRouter } from 'next/navigation'
import Image from 'next/image'
import { ChevronLeft } from 'lucide-react'
import { motion } from 'framer-motion'
import PortfolioCard from '@/components/home/portfolio/PortfolioCard'
import ProjectCard from '@/components/home/side-projects/ProjectCard'
import { sideProjects } from '@/constants'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from '@/components/ui/tooltip'

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
  const searchParams = useSearchParams()
  const router = useRouter()
  const isPortfolioHome = pathname === '/portfolio'

  const currentTab = searchParams.get('tab') || 'commercial'

  const handleTabChange = (value: string) => {
    const params = new URLSearchParams(searchParams)
    params.set('tab', value)
    router.push(`${pathname}?${params.toString()}`)
  }

  if (!portfolioItems) {
    return null
  }

  if (isPortfolioHome) {
    return (
      <>
        <div className='mt-20 flex flex-col gap-16 px-[30px] md:px-[30px] container max-w-5xl mx-auto'>
          <div className='flex flex-col'>
            <div className='flex flex-col mb-10'>
              <span className='font-bold text-xl'>{title}</span>
              <span className='font-regular text-gray-600 dark:text-gray-200'>
                Projects I have worked on, personal and commercial.
              </span>
            </div>

            {/* Personal Projects Section */}
            <div className='flex flex-col mb-16'>
              <h2 className='text-lg font-semibold mb-6'>Personal</h2>
              <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
                {sideProjects.map((project, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.25, delay: index * 0.1 }}
                    // quick fix for the project card, somehow adding motion.div to the project card breaks the layout
                    className='bg-lotion border border-gray-150 dark:border-gray-800 hover:bg-gray-100 dark:hover:bg-gray-800 relative group rounded-lg dark:bg-erie overflow-hidden max-h-[200px]'
                  >
                    <ProjectCard key={index} {...project} />
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Commercial Projects Section */}
            <div className='flex flex-col'>
              <h2 className='text-lg font-semibold mb-6'>Commercial</h2>
              <div className='grid grid-cols-1 sm:grid-cols-2 gap-10'>
                {portfolioItems.map((project, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.25, delay: index * 0.1 }}
                  >
                    <PortfolioCard key={index} {...project} id={index} />
                  </motion.div>
                ))}
              </div>
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
          'w-screen lg:relative lg:min-w-[25%] lg:max-w-[350px]',
          !isPortfolioHome && 'hidden lg:flex'
        )}
        initial={{ x: -300, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.25, ease: 'easeOut' }}
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
          <Tabs
            defaultValue={currentTab}
            className='w-full'
            onValueChange={handleTabChange}
          >
            <TabsList className='grid w-full grid-cols-2 mb-5 gap-1'>
              <TabsTrigger value='personal'>Personal</TabsTrigger>
              <TabsTrigger value='commercial'>Commercial</TabsTrigger>
            </TabsList>
            <TabsContent value='commercial'>
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
                    transition={{ duration: 0.25, delay: index * 0.05 }}
                  >
                    <Link
                      href={`${item.href}?tab=commercial`}
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
                          {/* {item.tags && item.tags.length > 0 && (
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
                          )} */}
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                )
              })}
            </TabsContent>
            <TabsContent value='personal'>
              {sideProjects.map((project, index) => {
                const isActive = pathname === `/portfolio/${project.link}`
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.25, delay: index * 0.05 }}
                  >
                    <Link
                      href={`/portfolio/${project.link}?tab=personal`}
                      className={cn(
                        'cursor-pointer my-1 gap-1 flex flex-1 flex-col space-x-3 rounded-md px-2 py-[10px] text-[14px] font-medium',
                        isActive
                          ? 'bg-gray-200 text-gray-900 dark:bg-gray-700 dark:text-white'
                          : 'text-gray-900 dark:text-white hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-800 dark:hover:text-white'
                      )}
                    >
                      <div className='flex flex-row items-center gap-2'>
                        {project.image && (
                          <Image
                            src={project.image}
                            alt={project.title}
                            width={45}
                            height={45}
                            className='object-cover rounded'
                          />
                        )}
                        <div className='flex flex-col'>
                          <span className='flex items-center gap-2'>
                            {project.title}
                            {project.active ? (
                              <TooltipProvider delayDuration={100}>
                                <Tooltip>
                                  <TooltipTrigger asChild>
                                    <span className='w-2 h-2 rounded-full bg-green-500 cursor-pointer'></span>
                                  </TooltipTrigger>
                                  <TooltipContent side='top'>
                                    <p>Active</p>
                                  </TooltipContent>
                                </Tooltip>
                              </TooltipProvider>
                            ) : null}
                          </span>
                          <span className='text-gray-500 dark:text-gray-400 text-[13px]'>
                            {project.description}
                          </span>
                          {/* {project.tags && project.tags.length > 0 && (
                            <div className='flex flex-wrap gap-1 mt-1'>
                              {project.tags.map((tag, tagIndex) => (
                                <span
                                  key={tagIndex}
                                  className='px-1.5 py-0.5 text-xs rounded-sm bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300'
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>
                          )} */}
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                )
              })}
            </TabsContent>
          </Tabs>
        </div>
      </motion.div>

      <motion.div
        className='flex-1 w-[20%]' // somehow it works when using the percentage
        initial={{ opacity: 1 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25 }}
      >
        {children}
      </motion.div>
    </div>
  )
}

export default PortfolioLayout
