'use client'

import { useTheme } from '@/Providers'

const WritingPage = () => {
  const { theme } = useTheme()

  return (
    <div
      style={
        {
          '--dot-bg': theme === 'dark' ? 'black' : 'white',
          '--dot-color': theme === 'dark' ? '#6b6b6b' : 'black',
          '--dot-size': '1px',
          '--dot-space': '22px',
          background: `
          linear-gradient(90deg, var(--dot-bg) calc(var(--dot-space) - var(--dot-size)), transparent 1%) center / var(--dot-space) var(--dot-space),
          linear-gradient(var(--dot-bg) calc(var(--dot-space) - var(--dot-size)), transparent 1%) center / var(--dot-space) var(--dot-space),
          var(--dot-color)
        `,
          minHeight: '100vh'
        } as React.CSSProperties
      }
    />
  )
}

export default WritingPage
