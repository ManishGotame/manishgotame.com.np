import { getPage } from '@/lib'
import { HomePage } from '@/components'

export default async function Home() {
  const recordMap = await getPage(process.env.NOTION_PAGE_ID as string)
  const blockMap = recordMap.block

  return <HomePage blockMap={blockMap} />
}
