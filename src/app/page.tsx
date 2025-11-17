import { HomePage } from '@/components'
import { getDatabase, extractNotionTableProperties } from '@/lib/notion'

export default async function Home() {
  const posts = await getDatabase(process.env.NOTION_BLOG_DATABASE_ID as string)
  const blogPosts = extractNotionTableProperties(posts)

  return <HomePage blogPosts={blogPosts} />
}
