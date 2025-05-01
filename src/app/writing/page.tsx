import { WritingPage } from '@/components'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Writing - Manish Gotame',
  description: 'Collection of my essays and articles.',
  openGraph: {
    title: 'Writing - Manish Gotame',
    description: 'Collection of my essays and articles.',
    images: [
      'https://personal-site.s3.ap-southeast-2.amazonaws.com/meta_small.jpg'
    ],
    url: 'https://manishgotame.com.np/writing',
    siteName: 'Manish Gotame',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    site: '@manishgotame',
    creator: '@manishgotame',
    title: 'Writing - Manish Gotame',
    description: 'Collection of my essays and articles.',
    images: [
      'https://personal-site.s3.ap-southeast-2.amazonaws.com/meta_small.jpg'
    ]
  }
}

export default function Page() {
  return <WritingPage />
}
