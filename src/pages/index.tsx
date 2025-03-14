import {
  Blog,
  Companies,
  Hero,
  Portfolio,
  SideProjects,
  Photos,
  Footer,
  MenuButton
} from '@/components'
import { cn } from '@/lib'
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
      <div
        className={cn(
          'p-5 block lg:hidden fixed bg-white/70 dark:bg-black/70 w-full z-10 flex items-center backdrop-blur-sm transition-opacity duration-200',
          showName && 'border-b border-gray-200 dark:border-gray-800 shadow-sm'
        )}
      >
        <MenuButton />
        <h2
          className={cn(
            'text-sm ml-1 font-bold text-primary transform-gpu line-clamp-1 lg:hidden',
            showName ? 'block' : 'hidden'
          )}
        >
          Manish Gotame
        </h2>
      </div>
      <div className='flex flex-col gap-[138px] px-[30px] md:px-[30px] container max-w-5xl mx-auto bg-white dark:bg-black text-black dark:text-white'>
        <Hero ref={headerRef} />
        <SideProjects />
        <Companies />
        <Portfolio />
        <Blog />
        <Photos />
        <Footer />
      </div>
    </>
  )
}
