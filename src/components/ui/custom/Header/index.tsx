// import { useSidebar } from '@/Providers'
// import { Menu } from 'lucide-react'

interface HeaderProps {
  title: string
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  // const { toggleSidebar } = useSidebar()

  return (
    <div className='z-10 flex flex-col justify-center px-5 py-5 border-b border-gray-150 dark:border-gray-800'>
      <div className='flex items-center justify-between flex-none'>
        <div className='flex items-center gap-3'>
          {/* <Menu
            onClick={toggleSidebar}
            className='w-5 h-5 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg'
          /> */}
          <h2 className='text-sm font-bold text-primary transform-gpu line-clamp-1'>
            {title}
          </h2>
        </div>
      </div>
    </div>
  )
}

export default Header
