import { notion } from '@/lib'
import { HomePage } from '@/components'

export default async function Home() {
  const recordMap = await notion.getPage(process.env.NOTION_PAGE_ID as string)
  const blockMap = recordMap.block

  return <HomePage blockMap={blockMap} />
}
