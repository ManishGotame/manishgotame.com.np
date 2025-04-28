import { WritingPage } from '@/components'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Manish Gotame - Portfolio',
  description: 'Projects I have worked on.',
  openGraph: {
    title: 'Manish Gotame - Portfolio',
    description: 'Projects I have worked on.',
    images: [
      'https://personal-site.s3.ap-southeast-2.amazonaws.com/meta_small.jpg'
    ],
    url: 'https://manishgotame.com.np/portfolio',
    siteName: 'Manish Gotame',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    site: '@manishgotame',
    creator: '@manishgotame',
    title: 'Manish Gotame - Portfolio',
    description: 'Projects I have worked on.',
    images: [
      'https://personal-site.s3.ap-southeast-2.amazonaws.com/meta_small.jpg'
    ]
  }
}

export default function Page() {
  return <WritingPage />
}
