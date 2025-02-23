import { cn } from '@/lib'
import { useState } from 'react'

export function SidebarOverlay() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div
      className={cn(
        'fixed inset-0 z-10 w-full transition duration-200 ease-in-out',
        'bg-gray-600 dark:bg-black',
        'bg-opacity-5 dark:bg-opacity-50',
        isOpen
          ? 'pointer-events-auto opacity-100'
          : 'pointer-events-none opacity-0'
      )}
      onClick={() => setIsOpen(false)}
    />
  )
}
