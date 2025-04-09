import type { AppProps } from 'next/app'
import type { NextPage } from 'next'

import { MainLayout } from '@/components'
import { SidebarProvider, ThemeProvider } from '@/Providers'
import '@/styles/globals.css'

type NextPageWithLayout = NextPage & {
  getLayout?: (page: React.ReactNode) => React.ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page: React.ReactNode) => page)

  return (
    <ThemeProvider>
      <SidebarProvider>
        <MainLayout>{getLayout(<Component {...pageProps} />)}</MainLayout>
      </SidebarProvider>
    </ThemeProvider>
  )
}
