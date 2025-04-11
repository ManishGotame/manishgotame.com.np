'use client'

import { cn } from '@/lib'
import MenuButton from '../MenuButton'

interface PageHeaderProps {
  showName?: boolean
}

const PageHeader = ({ showName = false }: PageHeaderProps) => {
  return (
    <div
      className={cn(
        'px-5 py-4 block lg:hidden fixed bg-white/70 dark:bg-black/70 w-full z-10 flex items-center backdrop-blur-sm transition-opacity duration-200',
        showName && 'border-b border-gray-200 dark:border-gray-800 shadow-sm'
      )}
    >
      <MenuButton icon='/logo.png' />
      <h2
        className={cn(
          'text-sm ml-3 font-bold text-primary transform-gpu line-clamp-1 lg:hidden',
          showName ? 'block' : 'hidden'
        )}
      >
        Manish Gotame
      </h2>
    </div>
  )
}

export default PageHeader
