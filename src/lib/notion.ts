/* eslint-disable @typescript-eslint/no-explicit-any */
import { Client } from '@notionhq/client'
import { format } from 'date-fns'
import { NotionAPI } from 'notion-client'
import { cache } from 'react'

export const notion = new NotionAPI()
const notionHQ = new Client({
  auth: process.env.NOTION_API_KEY
})

export const getPage = cache(async (slug: string) => {
  const data = await notion.getPage(slug)
  return data
})

export const getDatabase = cache(async (databaseId: string) => {
  const { results } = await notionHQ.databases.query({
    database_id: databaseId
  })
  return results
})

export const extractNotionTableProperties = (pages: any[]) => {
  const data = pages.map((page) => {
    const { id, properties, url } = page
    const processedProperties: Record<string, { type: string; value: any }> = {}
    for (const [propertyName, propertyData] of Object.entries(properties)) {
      const propertyType = (propertyData as any).type
      let propertyValue

      switch (propertyType) {
        case 'title':
          propertyValue = (propertyData as any).title
            .map((item: any) => item.plain_text)
            .join('')
          break
        case 'rich_text':
          const textItems = (propertyData as any).rich_text
          const plainText = textItems.map((item: any) => item.plain_text)
          const hasLinks = textItems.some((item: any) => item.href)

          if (hasLinks) {
            const links = textItems
              .filter((item: any) => item.href)
              .map((item: any) => ({
                text: item.plain_text,
                url: item.href
              }))
            propertyValue = {
              text: plainText,
              links
            }
          } else {
            propertyValue = plainText
          }
          break
        case 'checkbox':
          propertyValue = (propertyData as any).checkbox
          break
        case 'files':
          propertyValue = (propertyData as any).files
            .map((file: any) => {
              if (file.type === 'external') {
                return file.external.url
              }
              if (file.type === 'file') {
                return file.file.url
              }
              return null
            })
            .filter(Boolean)
          break
        case 'select':
          propertyValue = (propertyData as any).select?.name || null
          break
        case 'multi_select':
          propertyValue = (propertyData as any).multi_select.map(
            (option: any) => option.name
          )
          break
        case 'date':
          propertyValue = (propertyData as any).date
          break
        case 'number':
          propertyValue = (propertyData as any).number
          break
        case 'url':
          propertyValue = (propertyData as any).url
          break
        case 'email':
          propertyValue = (propertyData as any).email
          break
        case 'phone_number':
          propertyValue = (propertyData as any).phone_number
          break
      }

      processedProperties[propertyName.toLowerCase().replace(/\s+/g, '_')] = {
        type: propertyType,
        value: propertyValue
      }
    }

    return {
      id,
      url,
      properties: processedProperties
    }
  })

  return data
    .map((post) => {
      return {
        id: post.id,
        title: post.properties.title.value,
        date: format(
          new Date(post.properties.published_date.value),
          'MMMM dd, yyyy'
        ),
        description: post.properties.description.value,
        published: post.properties.published?.value ?? true,
        slug:
          post.properties.slug.value.length > 0
            ? post.properties.slug.value[0]
            : null
      }
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}
