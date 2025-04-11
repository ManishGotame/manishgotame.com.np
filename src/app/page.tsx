import {
  Blog,
  Companies,
  Hero,
  Portfolio,
  SideProjects,
  Photos,
  Footer
} from '@/components'
import { notion } from '@/lib'

export default async function Home() {
  const recordMap = await notion.getPage(process.env.NOTION_PAGE_ID as string)
  const blockMap = recordMap.block

  return (
    <>
      <div className='flex flex-col gap-[138px] px-[30px] md:px-[30px] container max-w-5xl mx-auto bg-white dark:bg-black text-black dark:text-white'>
        <Hero blockMap={blockMap} />
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
