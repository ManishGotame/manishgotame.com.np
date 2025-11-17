'use client'

import 'prismjs/themes/prism-tomorrow.css'
// TODO: To support dashes, probably need to mess around with this styling file.
import 'react-notion-x/src/styles.css'

import { Footer, Header } from '@/components'
import { cn } from '@/lib'
import { useTheme } from '@/Providers'
import { ChevronLeft } from 'lucide-react'
import { usePathname, useRouter } from 'next/navigation'
import React, { ReactNode } from 'react'
import { useEffect, useState } from 'react'
import { NotionRenderer } from 'react-notion-x'
import { Collection } from 'react-notion-x/build/third-party/collection'
import { Equation } from 'react-notion-x/build/third-party/equation'
import { Modal } from 'react-notion-x/build/third-party/modal'
import { Pdf } from 'react-notion-x/build/third-party/pdf'
import dynamic from 'next/dynamic'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ExtendedRecordMap } from 'notion-types'

interface PostProps {
  blockMap: ExtendedRecordMap
  link: string
  title: string
  header: ReactNode
}

const Code = dynamic(() =>
  import('react-notion-x/build/third-party/code').then(async (m) => {
    // add / remove any prism syntaxes here
    await Promise.allSettled([
      import('prismjs/components/prism-markup-templating.js'),
      import('prismjs/components/prism-markup.js'),
      import('prismjs/components/prism-bash.js'),
      import('prismjs/components/prism-c.js'),
      import('prismjs/components/prism-cpp.js'),
      import('prismjs/components/prism-csharp.js'),
      import('prismjs/components/prism-docker.js'),
      import('prismjs/components/prism-java.js'),
      import('prismjs/components/prism-js-templates.js'),
      import('prismjs/components/prism-coffeescript.js'),
      import('prismjs/components/prism-diff.js'),
      import('prismjs/components/prism-git.js'),
      import('prismjs/components/prism-go.js'),
      import('prismjs/components/prism-graphql.js'),
      import('prismjs/components/prism-handlebars.js'),
      import('prismjs/components/prism-less.js'),
      import('prismjs/components/prism-makefile.js'),
      import('prismjs/components/prism-markdown.js'),
      import('prismjs/components/prism-objectivec.js'),
      import('prismjs/components/prism-ocaml.js'),
      import('prismjs/components/prism-python.js'),
      import('prismjs/components/prism-reason.js'),
      import('prismjs/components/prism-rust.js'),
      import('prismjs/components/prism-sass.js'),
      import('prismjs/components/prism-scss.js'),
      import('prismjs/components/prism-solidity.js'),
      import('prismjs/components/prism-sql.js'),
      import('prismjs/components/prism-stylus.js'),
      import('prismjs/components/prism-swift.js'),
      import('prismjs/components/prism-wasm.js'),
      import('prismjs/components/prism-yaml.js')
    ])
    return m.Code
  })
)

export default function Post({ blockMap, link, title, header }: PostProps) {
  const pathname = usePathname()
  const router = useRouter()
  const { theme } = useTheme()
  const [showFixedTitle, setShowFixedTitle] = useState(false)
  const [openSidebar, setOpenSidebar] = useState(false)
  const titleRef = React.useRef<HTMLDivElement>(null)
  const notionRef = React.useRef<HTMLDivElement>(null)
  const [titleMargin, setTitleMargin] = useState<number | null>(null)
  const [fullWidth, setFullWidth] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setShowFixedTitle(!entry.isIntersecting)
      },
      {
        rootMargin: '-1px 0px 0px 0px',
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

  useEffect(() => {
    const updateMargin = () => {
      if (notionRef.current) {
        // get the margin left of the page
        const notionElement = notionRef.current.querySelector('.notion-page')
        if (notionElement) {
          const computedStyle = window.getComputedStyle(notionElement)
          const marginLeft = parseFloat(computedStyle.marginLeft)
          setTitleMargin(marginLeft)
        }

        // check if the page is full width
        const notionFullWidthElement =
          notionRef.current.querySelector('.notion-full-width')

        if (notionFullWidthElement) {
          setFullWidth(true)
        } else {
          setFullWidth(false)
        }
      }
    }

    updateMargin()
    window.addEventListener('resize', updateMargin)
    return () => window.removeEventListener('resize', updateMargin)
  }, [])

  const handleBack = () => {
    router.push(link)
  }

  if (!blockMap) {
    return (
      <div className='flex items-center justify-center min-h-screen'>
        <div className='text-xl font-semibold'>Page not found</div>
      </div>
    )
  }

  return (
    <motion.div
      className='flex relative'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.25 }}
    >
      <div className='overflow-y-scroll h-screen w-full'>
        {/* smaller screen header */}
        <div className='absolute p-5 top-0 left-0'>
          <ChevronLeft
            className='w-5 h-5 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg block lg:hidden'
            onClick={handleBack}
          />
        </div>
        <div
          className='flex flex-col mt-[62px] mb-8'
          ref={titleRef}
          style={{
            marginLeft: fullWidth ? '0px' : `calc(${titleMargin}px + 10px)`,
            marginRight: fullWidth ? '0px' : `calc(${titleMargin}px + 10px)`,
            paddingLeft: fullWidth
              ? `calc(min(126px, 8vw))`
              : `calc(min(16px, 8vw))`,
            paddingRight: fullWidth
              ? `calc(min(126px, 8vw))`
              : `calc(min(16px, 8vw))`
          }}
        >
          {titleMargin !== null ? header : null}
        </div>

        {/* scroll controlled header for larger screens */}
        <div
          className={cn(
            'absolute w-[100%] top-0 z-10 flex flex-col justify-center transition-opacity duration-200',
            showFixedTitle ? 'opacity-100' : 'opacity-0 pointer-events-none'
          )}
        >
          <Header title={title} onClick={handleBack} backButton={true} />
        </div>
        <div ref={notionRef} className=''>
          <NotionRenderer
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            recordMap={blockMap as any}
            darkMode={theme === 'dark'}
            className='notion-page'
            components={{
              nextImage: Image,
              nextLink: Link,
              Code,
              Collection,
              Equation,
              Pdf,
              Modal
            }}
          />
        </div>
        <Footer />
      </div>
    </motion.div>
  )
}
