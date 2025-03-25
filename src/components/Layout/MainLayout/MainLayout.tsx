import { BottomNavigation, Sidebar } from '@/components/ui/custom'

interface MainLayoutProps {
  children: React.ReactNode
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className='relative flex h-full min-h-screen w-full bg-background-light dark:bg-background-dark text-primary-light dark:text-primary-dark'>
      <div className='z-[9999] fixed top-0 left-0 h-full bg-surface-light dark:bg-surface-dark z-50'>
        <Sidebar />
      </div>
      <div className='ml-3/4 3xl:ml-80 sm:ml-1/2 md:ml-1/3 lg:ml-56 2xl:ml-72 flex-grow overflow-y-auto'>
        {children}
      </div>
      <div className='z-[100] fixed bottom-0 left-0 w-full bg-surface-light dark:bg-surface-dark z-50'>
        <BottomNavigation />
      </div>
    </div>
  )
}

export default MainLayout
