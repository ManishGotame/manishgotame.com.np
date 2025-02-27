import { useSidebar } from '@/Providers'
import { Menu } from 'lucide-react'

interface MenuButtonProps {
  className?: string
}

const MenuButton: React.FC<MenuButtonProps> = ({
  className = 'p-5 block lg:hidden'
}) => {
  const { toggleSidebar } = useSidebar()

  return (
    <div className={className}>
      <Menu
        onClick={toggleSidebar}
        className='w-8 h-8 p-1.5 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg'
      />
    </div>
  )
}

export default MenuButton
