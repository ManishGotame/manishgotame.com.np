import { useSidebar } from '@/Providers'
import { Menu } from 'lucide-react'
import Image from 'next/image'
interface MenuButtonProps {
  className?: string
  onClick?: () => void
  icon?: string
}

const MenuButton: React.FC<MenuButtonProps> = ({
  className = 'block lg:hidden',
  onClick,
  icon
}) => {
  const { toggleSidebar } = useSidebar()

  return (
    <div className={className}>
      {!icon ? (
        <Menu
          onClick={onClick ?? toggleSidebar}
          className='w-5 h-5 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg'
        />
      ) : (
        <Image
          src={icon!}
          alt='logo'
          width={24}
          height={24}
          className='cursor-pointer'
          onClick={onClick ?? toggleSidebar}
        />
      )}
    </div>
  )
}

export default MenuButton
