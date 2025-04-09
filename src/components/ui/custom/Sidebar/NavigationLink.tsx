import * as React from 'react'
import Link from 'next/link'

import { cn } from '@/lib'
import { usePathname } from 'next/navigation'
import { useSidebar } from '@/Providers'

interface NavigationLinkProps {
  link: {
    href: string
    label: string
    icon: React.ComponentType
    trailingAccessory?: React.ComponentType | null
    trailingAction?: React.ComponentType | null
    isExternal?: boolean | null
  }
}

export function NavigationLink({
  link: {
    href,
    label,
    icon: Icon,
    trailingAccessory: Accessory,
    trailingAction: Action,
    isExternal = false
  }
}: NavigationLinkProps) {
  const pathname = usePathname()
  const { toggleClose } = useSidebar()

  return (
    <li className='flex items-stretch space-x-1'>
      <Link
        href={href}
        passHref
        target={isExternal ? '_blank' : undefined}
        rel={isExternal ? 'noopener noreferrer' : undefined}
        onClick={toggleClose}
        className={cn(
          'flex flex-1 items-center space-x-3 rounded-md px-2 py-1.5 text-sm font-medium',
          pathname === href || pathname.startsWith(`${href}/`)
            ? 'bg-gray-900 text-white dark:bg-gray-100 dark:text-gray-900'
            : 'text-gray-700 hover:bg-gray-150 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white'
        )}
      >
        <span className='flex items-center justify-center w-4'>
          <Icon />
        </span>
        <span className='flex-1'>{label}</span>
        {Accessory && (
          <span className='flex items-center justify-center w-4 text-gray-500 dark:text-gray-400'>
            <Accessory />
          </span>
        )}
      </Link>
      {Action && <Action />}
    </li>
  )
}
