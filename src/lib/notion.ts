/* eslint-disable @typescript-eslint/no-explicit-any */
import { NotionAPI } from 'notion-client'
import { cache } from 'react'

export const notion = new NotionAPI()

export const getPage = cache(async (slug: string) => {
  const data = await notion.getPage(slug)
  return data
})

export const extractNotionTableProperties = (pages: any[]) => {
  return pages.map((page) => {
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
          propertyValue = (propertyData as any).rich_text
            .map((item: any) => item.plain_text)
            .join('')
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

      processedProperties[propertyName] = {
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
}
