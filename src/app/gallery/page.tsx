import { ExtendedRecordMap } from 'notion-types'
import { PageHeader } from '@/components'
import ClientGalleryContent from './content'
import { notion } from '@/lib'

export default async function Gallery() {
  let recordMap: ExtendedRecordMap | null = null

  try {
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
