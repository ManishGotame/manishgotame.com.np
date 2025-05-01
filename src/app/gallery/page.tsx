import { ExtendedRecordMap } from 'notion-types'
import ClientGalleryContent from './content'
import { getPage } from '@/lib'
import { Metadata } from 'next'

export const revalidate = 30

export const metadata: Metadata = {
  title: 'Gallery - Manish Gotame',
  description: 'Collection of photos from my trips.',
  openGraph: {
    title: 'Gallery - Manish Gotame',
    description: 'Collection of photos from my trips.',
    images: [
      'https://personal-site.s3.ap-southeast-2.amazonaws.com/meta_small.jpg'
    ],
    url: 'https://manishgotame.com.np/gallery',
    siteName: 'Manish Gotame',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    site: '@manishgotame',
    creator: '@manishgotame',
    title: 'Gallery - Manish Gotame',
    description: 'Collection of photos from my trips.',
    images: [
      'https://personal-site.s3.ap-southeast-2.amazonaws.com/meta_small.jpg'
    ]
  }
}

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
