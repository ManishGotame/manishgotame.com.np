'use client'

export default function PortfolioLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <div>
      <h2>My shissPortfolio</h2>
      {children}
    </div>
  )
}
