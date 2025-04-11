import { WritingLayout } from '@/components'
import { getTitles } from '@/lib'
import { NotionAPI } from 'notion-client'

export const revalidate = 30

export default async function Layout({
  children
}: {
  children: React.ReactNode
}) {
  const notion = new NotionAPI()
  const recordMap = await notion.getPage(process.env.NOTION_PAGE_ID as string)
  const blockMap = recordMap.block
  const articleTitles = getTitles(blockMap)

  return (
    <WritingLayout title='Writing' articleTitles={articleTitles}>
      {children}
    </WritingLayout>
  )
}
