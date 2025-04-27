import { ExtendedRecordMap } from 'notion-types'
import ClientGalleryContent from './content'
import { getPage } from '@/lib'

export const revalidate = 30

export default async function Gallery() {
  let recordMap: ExtendedRecordMap | null = null

  try {
    recordMap = await getPage(process.env.NOTION_GALLERY_PAGE_ID as string)
  } catch (error) {
    console.error('Failed to fetch Notion page:', error)
  }

  return (
    <div>
      <ClientGalleryContent recordMap={recordMap} />
    </div>
  )
}
