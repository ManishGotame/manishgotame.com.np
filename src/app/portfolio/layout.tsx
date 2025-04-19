import { PortfolioLayout } from '@/components/Layout'
import { portfolio } from '@/constants'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <PortfolioLayout title={'Portfolio'} portfolioItems={portfolio}>
      {children}
    </PortfolioLayout>
  )
}
