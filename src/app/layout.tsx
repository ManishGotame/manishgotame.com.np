import type { Metadata } from 'next'
import '@/styles/globals.css'
import { SidebarProvider, ThemeProvider } from '@/Providers'
import { MainLayout } from '@/components'

export const metadata: Metadata = {
  title: 'Manish Gotame',
  description: 'Software Developer, Cyclist, and occasional Essayist.',
  openGraph: {
    title: 'Manish Gotame',
    description: 'Software Developer, Cyclist, and occasional Essayist.',
    images: [
      'https://personal-site.s3.ap-southeast-2.amazonaws.com/meta_small.jpg'
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
    description: 'Software Developer, Cyclist, and occasional Essayist.',
    images: [
      'https://personal-site.s3.ap-southeast-2.amazonaws.com/meta_small.jpg'
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
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                function getInitialTheme() {
                  const savedTheme = localStorage.getItem('theme')
                  if (savedTheme) return savedTheme

                  return window.matchMedia('(prefers-color-scheme: dark)').matches
                    ? 'dark'
                    : 'light'
                }

                const theme = getInitialTheme()
                document.documentElement.classList.toggle('dark', theme === 'dark')
              })()
            `
          }}
        />
      </head>
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
