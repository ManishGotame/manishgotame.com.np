import { ExtendedRecordMap } from 'notion-types'
import { NotionAPI } from 'notion-client'
import { PageHeader } from '@/components'
import ClientGalleryContent from './content'

export default async function Gallery() {
  let recordMap: ExtendedRecordMap | null = null

  try {
    const notion = new NotionAPI()
    recordMap = await notion.getPage(
      process.env.NOTION_GALLERY_PAGE_ID as string
    )
  } catch (error) {
    console.error('Failed to fetch Notion page:', error)
  }

  return (
    <>
      <PageHeader />
      <ClientGalleryContent recordMap={recordMap} />
    </>
  )
}
