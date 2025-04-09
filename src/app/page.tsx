import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Manish brah',
  description: 'This is the layout metadata'
}

import {
  Blog,
  Companies,
  // Hero,
  Portfolio,
  SideProjects,
  Photos,
  Footer
} from '@/components'
import { NotionAPI } from 'notion-client'
// import { BlockMap } from 'notion-types'
// import HeaderWithName from './HeaderWithName'

// Mark page as Server Component
export default async function Home() {
  // Fetch data directly in the component
  const notion = new NotionAPI()
  const recordMap = await notion.getPage(process.env.NOTION_PAGE_ID as string)
  const blockMap = recordMap.block

  return (
    <>
      {/* <HeaderWithName /> */}
      <div className='flex flex-col gap-[138px] px-[30px] md:px-[30px] container max-w-5xl mx-auto bg-white dark:bg-black text-black dark:text-white'>
        {/* <Hero blockMap={blockMap} /> */}
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
