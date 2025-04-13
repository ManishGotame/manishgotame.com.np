import { MenuButton } from '..'
import { ChevronLeft } from 'lucide-react'

interface HeaderProps {
  title: string
  onClick?: () => void
  backButton?: boolean
}

const Header: React.FC<HeaderProps> = ({
  title,
  onClick,
  backButton = false
}) => {
  return (
    <div className='z-10 flex flex-col justify-center px-5 py-[14px] bg-lotion/50 dark:bg-gray-900/50 backdrop-blur-sm'>
      <div className='flex items-center justify-between flex-none'>
        <div className='flex items-center gap-3'>
          {backButton ? (
            <ChevronLeft
              className='w-5 h-5 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg block lg:hidden'
              onClick={onClick}
            />
          ) : (
            <MenuButton onClick={onClick} icon='/logo.png' />
          )}
          <h2 className='text-sm font-bold text-primary transform-gpu line-clamp-1'>
            {title}
          </h2>
        </div>
      </div>
    </div>
  )
}

export default Header
