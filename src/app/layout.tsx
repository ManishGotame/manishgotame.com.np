import type { Metadata } from 'next'
import '@/styles/globals.css'
import { SidebarProvider, ThemeProvider } from '@/Providers'
import { MainLayout } from '@/components'

export const metadata: Metadata = {
  title: 'Manish Gotame',
  description: 'Full Stack Developer, cyclist, and occasional essayist.',
  openGraph: {
    title: 'Manish Gotame',
    description: 'Full Stack Developer, cyclist, and occasional essayist.',
    images: [
      'https://personal-site.s3.ap-southeast-2.amazonaws.com/meta_img.png'
    ],
    url: 'https://manishgotame.com.np',
    siteName: 'Manish Gotame',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    site: '@manishgotame',
    creator: '@manishgotame',
    title: 'Manish Gotame',
    description: 'Full Stack Developer, cyclist, and occasional essayist.',
    images: [
      'https://personal-site.s3.ap-southeast-2.amazonaws.com/meta_img.png'
    ]
  }
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body>
        <ThemeProvider>
          <SidebarProvider>
            <MainLayout>{children}</MainLayout>
          </SidebarProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
