import { useSidebar } from '@/Providers'
import { Menu } from 'lucide-react'

interface MenuButtonProps {
  className?: string
  onClick?: () => void
}

const MenuButton: React.FC<MenuButtonProps> = ({
  className = 'p-5 block lg:hidden',
  onClick
}) => {
  const { toggleSidebar } = useSidebar()

  return (
    <div className={className}>
      <Menu
        onClick={onClick ?? toggleSidebar}
        className='w-5 w-5 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg'
      />
    </div>
  )
}

export default MenuButton
