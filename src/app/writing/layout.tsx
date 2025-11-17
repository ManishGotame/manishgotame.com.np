import { WritingLayout } from '@/components'
import { extractNotionTableProperties, getDatabase } from '@/lib/notion'

export const revalidate = 30

export default async function Layout({
  children
}: {
  children: React.ReactNode
}) {
  const posts = await getDatabase(process.env.NOTION_BLOG_DATABASE_ID as string)
  const blogPosts = extractNotionTableProperties(posts)

  return (
    <WritingLayout title='Writing' blogPosts={blogPosts}>
      {children}
    </WritingLayout>
  )
}
