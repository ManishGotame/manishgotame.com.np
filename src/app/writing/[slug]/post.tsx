'use client'

import 'prismjs/themes/prism-tomorrow.css'
// TODO: To support dashes, probably need to mess around with this styling file.
import 'react-notion-x/src/styles.css'

import { Footer, Header } from '@/components'
import { cn } from '@/lib'
import { useTheme } from '@/Providers'
import { ChevronLeft, Code } from 'lucide-react'
import { usePathname } from 'next/navigation'
import { ExtendedRecordMap } from 'notion-types'
import React from 'react'
import { useEffect, useState } from 'react'
import { NotionRenderer } from 'react-notion-x'
import { Collection } from 'react-notion-x/build/third-party/collection'
import { Equation } from 'react-notion-x/build/third-party/equation'
import { Modal } from 'react-notion-x/build/third-party/modal'
import { Pdf } from 'react-notion-x/build/third-party/pdf'

interface PostProps {
  blockMap: ExtendedRecordMap
  title: string
}

export default function Post({ blockMap, title }: PostProps) {
  const pathname = usePathname()
  const { theme } = useTheme()
  const [showFixedTitle, setShowFixedTitle] = useState(false)
  const [openSidebar, setOpenSidebar] = useState(false)
  const titleRef = React.useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setShowFixedTitle(!entry.isIntersecting)
      },
      {
        threshold: 0
      }
    )

    if (titleRef.current) {
      observer.observe(titleRef.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    window.scrollTo(0, 0)
    setOpenSidebar(false)
  }, [pathname])

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024 && openSidebar) {
        setOpenSidebar(false)
      }
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [openSidebar])

  if (!blockMap) {
    return (
      <div className='flex items-center justify-center min-h-screen'>
        <div className='text-xl font-semibold'>Page not found</div>
      </div>
    )
  }

  return (
    <div className='flex'>
      <div className='overflow-y-scroll h-screen flex-1'>
        <div className='absolute p-5 top-0 left-0'>
          <ChevronLeft
            className='w-5 h-5 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg block lg:hidden'
            onClick={() => setOpenSidebar(!openSidebar)}
          />
        </div>
        <div
          className='flex flex-col justify-center items-center mt-20 mb-10 px-[16px]'
          ref={titleRef}
        >
          <h1 className='text-3xl font-semibold'>{title}</h1>
        </div>
        <div
          className={cn(
            'fixed w-[100%] top-0 z-10 flex flex-col justify-center transition-opacity duration-200',
            showFixedTitle ? 'block' : 'hidden',
            theme === 'dark'
              ? 'bg-gray-900/70  border-gray-800 backdrop-blur-sm'
              : 'bg-white/70 border-gray-200 backdrop-blur-sm'
          )}
        >
          <Header
            title={title}
            onClick={() => setOpenSidebar(!openSidebar)}
            backButton={true}
          />
        </div>
        <NotionRenderer
          recordMap={blockMap}
          darkMode={theme === 'dark'}
          disableHeader={true}
          components={{
            Code,
            Collection,
            Equation,
            Pdf,
            Modal
          }}
        />
        <Footer />
      </div>
    </div>
  )
}
