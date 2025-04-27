import { NotionAPI } from 'notion-client'
import { cache } from 'react'

export const notion = new NotionAPI()

export const getPage = cache(async (slug: string) => {
  const data = await notion.getPage(slug)
  return data
})
