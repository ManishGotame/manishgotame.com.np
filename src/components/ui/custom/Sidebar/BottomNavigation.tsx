'use client'

import Link from 'next/link'
import { routes } from '@/constants/navigation'
import { cn } from '@/lib/utils'
import { usePathname } from 'next/navigation'

const BottomNavigation = () => {
  const pathname = usePathname()

  // Get only the main navigation items (first group)
  const mainNavItems = routes[0].items

  return (
    <nav className='z-[1000] block lg:hidden fixed bottom-0 left-0 right-0 h-16 bg-background/80 backdrop-blur-lg border-t border-gray-150 dark:border-gray-800'>
      <div className='grid h-full max-w-lg grid-cols-4 mx-auto'>
        {mainNavItems.map((item) => {
          const isActive =
            pathname === item.href || pathname.startsWith(`${item.href}/`)
          const Icon = item.icon

          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'inline-flex flex-col items-center justify-center px-5 group relative',
                isActive
                  ? 'text-gray-900 font-semibold border-b-2 border-gray-900 dark:text-white dark:border-white'
                  : 'text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white'
              )}
            >
              <span className='flex items-center justify-center w-4 scale-125'>
                <Icon />
              </span>
            </Link>
          )
        })}
      </div>
    </nav>
  )
}

export default BottomNavigation
