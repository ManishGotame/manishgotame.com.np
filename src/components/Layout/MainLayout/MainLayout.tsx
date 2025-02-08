import { Sidebar } from '@/components/ui/custom'

interface MainLayoutProps {
  children: React.ReactNode
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className='relative flex h-full min-h-screen w-full'>
      <div className={`fixed top-0 left-0 h-full bg-gray-800 z-50`}>
        <Sidebar />
      </div>
      <div className='ml-3/4 3xl:ml-80 sm:ml-1/2 md:ml-1/3 lg:ml-56 2xl:ml-72 flex-grow overflow-y-auto'>
        {children}
      </div>
    </div>
  )
}

export default MainLayout
