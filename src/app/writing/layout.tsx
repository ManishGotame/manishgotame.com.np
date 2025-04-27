import { WritingLayout } from '@/components'
import { getPage, getTitles } from '@/lib'

export const revalidate = 30

export default async function Layout({
  children
}: {
  children: React.ReactNode
}) {
  const recordMap = await getPage(process.env.NOTION_PAGE_ID as string)
  const blockMap = recordMap.block
  const articleTitles = getTitles(blockMap)

  return (
    <WritingLayout title='Writing' articleTitles={articleTitles}>
      {children}
    </WritingLayout>
  )
}
