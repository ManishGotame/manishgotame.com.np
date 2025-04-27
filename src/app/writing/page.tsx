import { WritingPage } from '@/components'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Writing',
  description: 'My Writing'
}

export default function Page() {
  return <WritingPage />
}
