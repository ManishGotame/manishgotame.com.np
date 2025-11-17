import { MetadataRoute } from 'next'
import { portfolio, sideProjects } from '@/constants'
import { getDatabase, extractNotionTableProperties } from '@/lib/notion'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: 'https://manishgotame.com.np/',
      changeFrequency: 'monthly',
      priority: 1
    },
    {
      url: 'https://manishgotame.com.np/writing',
      changeFrequency: 'weekly',
      priority: 0.9
    },
    {
      url: 'https://manishgotame.com.np/about',
      changeFrequency: 'monthly',
      priority: 0.8
    },
    {
      url: 'https://manishgotame.com.np/portfolio',
      changeFrequency: 'monthly',
      priority: 0.8
    },
    {
      url: 'https://manishgotame.com.np/gallery',
      changeFrequency: 'weekly',
      priority: 0.6
    }
  ]

  // Portfolio and side projects
  const projectPages: MetadataRoute.Sitemap = [
    ...portfolio.map((item) => ({
      url: `https://manishgotame.com.np/portfolio/${item.link}?tab=commerical`,
      priority: 0.6
    })),
    ...sideProjects.map((item) => ({
      url: `https://manishgotame.com.np/portfolio/${item.link}?tab=personal`,
      changeFrequency: 'weekly',
      priority: 0.8
    }))
  ]

  const results = await getDatabase(
    process.env.NOTION_BLOG_DATABASE_ID as string
  )
  const posts = extractNotionTableProperties(results)

  // Writing entries (Notion)
  const writingPages: MetadataRoute.Sitemap = posts.map((entry) => ({
    url: `https://manishgotame.com.np/writing/${entry.id}`,
    changeFrequency: 'weekly',
    priority: 0.5,
    lastModified: entry.date
  }))

  // Combine all
  return [
    ...staticPages.map((page) => ({
      ...page,
      lastModified: '2025-05-13'
    })),
    ...projectPages.map((page) => ({
      ...page,
      lastModified: '2025-05-13'
    })),
    ...writingPages
  ]
}
