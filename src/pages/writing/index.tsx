import { NotionAPI } from 'notion-client'
import { BlockMap } from 'notion-types'
import { WritingSidebar } from '@/components'

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

export default function Writing({ blockMap }: PageProps) {
  const title = 'Writing'

  return (
    <div className='flex'>
      <WritingSidebar blockMap={blockMap} title={title} open={true} />
    </div>
  )
}

Writing.displayName = 'Writing'
