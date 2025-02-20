interface HeaderProps {
  title: string
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <div className='p-5 gap-2 border-b border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark'>
      <div className='flex justify-between items-center'>
        <span className='text-md font-bold text-primary-light dark:text-primary-dark transform-gpu line-clamp-1'>
          {title}
        </span>
      </div>
    </div>
  )
}

export default Header
