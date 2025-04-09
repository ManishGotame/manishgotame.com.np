import {
  Blog,
  Companies,
  Hero,
  Portfolio,
  SideProjects,
  Photos,
  Footer,
  PageHeader
} from '@/components'
import { NotionAPI } from 'notion-client'
import { BlockMap } from 'notion-types'
import { useEffect, useRef, useState } from 'react'

export async function getStaticProps() {
  const notion = new NotionAPI()
  const recordMap = await notion.getPage(process.env.NOTION_PAGE_ID as string)

  return {
    props: {
      blockMap: recordMap.block
    }
  }
}

type PageProps = {
  blockMap: BlockMap
}

export default function Home({ blockMap }: PageProps) {
  const [showName, setShowName] = useState(false)
  const headerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setShowName(!entry.isIntersecting)
      },
      {
        threshold: 0
      }
    )

    if (headerRef.current) {
      observer.observe(headerRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <>
      <PageHeader showName={showName} />
      <div className='flex flex-col gap-[138px] px-[30px] md:px-[30px] container max-w-5xl mx-auto bg-white dark:bg-black text-black dark:text-white'>
        <Hero ref={headerRef} blockMap={blockMap} />
        <SideProjects />
        <Companies />
        <Portfolio />
        <Blog blockMap={blockMap} />
        <Photos />
      </div>
      <Footer />
    </>
  )
}
