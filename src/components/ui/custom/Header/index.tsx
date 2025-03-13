import { MenuButton } from '..'

interface HeaderProps {
  title: string
  onClick?: () => void
}

const Header: React.FC<HeaderProps> = ({ title, onClick }) => {
  return (
    <div className='z-10 flex flex-col justify-center px-5 py-5 border-b border-gray-150 dark:border-gray-800'>
      <div className='flex items-center justify-between flex-none'>
        <div className='flex items-center gap-3'>
          <MenuButton className='' onClick={onClick} />
          <h2 className='text-sm font-bold text-primary transform-gpu line-clamp-1'>
            {title}
          </h2>
        </div>
      </div>
    </div>
  )
}

export default Header
