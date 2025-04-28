import { AboutPage } from '@/components'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Manish Gotame - About',
  description: 'Software Developer, Cyclist, and occasional Essayist.',
  openGraph: {
    title: 'Manish Gotame - About',
    description: 'Software Developer, Cyclist, and occasional Essayist.',
    images: [
      'https://personal-site.s3.ap-southeast-2.amazonaws.com/meta_small.jpg'
    ],
    url: 'https://manishgotame.com.np/about',
    siteName: 'Manish Gotame',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    site: '@manishgotame',
    creator: '@manishgotame',
    title: 'Manish Gotame - About',
    description: 'Software Developer, Cyclist, and occasional Essayist.',
    images: [
      'https://personal-site.s3.ap-southeast-2.amazonaws.com/meta_small.jpg'
    ]
  }
}

export default function About() {
  return <AboutPage />
}
