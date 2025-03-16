import {
  Blog,
  Companies,
  Hero,
  Portfolio,
  SideProjects,
  Photos,
  Footer,
  PageHeader
} from '@/components'
import { useEffect, useRef, useState } from 'react'

export default function Home() {
  const [showName, setShowName] = useState(false)
  const headerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setShowName(!entry.isIntersecting)
      },
      {
        threshold: 0
      }
    )

    if (headerRef.current) {
      observer.observe(headerRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <>
      <PageHeader showName={showName} />
      <div className='flex flex-col gap-[138px] px-[30px] md:px-[30px] container max-w-5xl mx-auto bg-white dark:bg-black text-black dark:text-white'>
        <Hero ref={headerRef} />
        <SideProjects />
        <Companies />
        <Portfolio />
        <Blog />
        <Photos />
      </div>
      <Footer />
    </>
  )
}
