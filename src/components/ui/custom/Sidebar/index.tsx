import { SunIcon, MoonIcon } from 'lucide-react'

import { useSidebar } from '@/Providers'
import { useTheme } from '@/Providers/ThemeProvider'
import { SidebarNavigation } from './Navigation'
import { SidebarOverlay } from './Overlay'
import { cn } from '@/lib'

const Sidebar = () => {
  const { openSidebar } = useSidebar()
  const { theme, toggleTheme } = useTheme()

  return (
    <>
      <nav
        className={cn(
          openSidebar
            ? 'absolute translate-x-0 shadow-lg w-72 2xl:w-72 3xl:w-80' // small device
            : 'absolute -translate-x-full w-3/4 sm:w-1/2 md:w-1/3 lg:w-56 2xl:w-72 3xl:w-80', // full page
          'z-50 flex h-full max-h-screen min-h-screen flex-none transform flex-col overflow-y-auto border-r border-gray-150 bg-white pb-10 transition duration-200 ease-in-out dark:border-gray-800 dark:bg-gray-900 sm:pb-0 lg:relative lg:translate-x-0 lg:bg-gray-50 lg:dark:bg-gray-900'
        )}
      >
        <div className='filter-blur sticky top-0 z-10 flex flex-col justify-center px-5 py-5'>
          <div className='flex items-center justify-between flex-none'>
            <h2 className='text-sm font-bold text-primary transform-gpu line-clamp-1'>
              Manish Gotame
            </h2>
          </div>
        </div>
        <SidebarNavigation />
        <div className='mt-auto px-3 py-4 border-t border-gray-150 dark:border-gray-800'>
          <button
            onClick={toggleTheme}
            className='w-full p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 flex items-center justify-center'
          >
            {theme === 'light' ? (
              <MoonIcon className='w-4 h-4' />
            ) : (
              <SunIcon className='w-4 h-4' />
            )}
          </button>
        </div>
      </nav>
      <SidebarOverlay />
    </>
  )
}

export default Sidebar
