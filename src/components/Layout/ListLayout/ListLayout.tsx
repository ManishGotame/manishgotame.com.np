import { Header } from '@/components'
import { getTitles } from '@/utils'
import { BlockMapType } from 'react-notion'

interface ListLayoutProps {
  title: string
  blockMap: BlockMapType
  children: React.ReactNode
}

const ListLayout: React.FC<ListLayoutProps> = ({
  title,
  blockMap,
  children
}) => {
  const articleTitles = getTitles(blockMap)
  return (
    <div className='w-[40%] flex flex-row gap-1'>
      <div className='h-[100vh] border-r border-gray-150 pb-10 transition duration-200 ease-in-out dark:border-gray-800 w-[100%] lg:translate-x-0'>
        <Header title={title} />
        <div className='p-5'>
          {articleTitles.map((each, index) => {
            const item = {
              href: `/writing/${each.id}`,
              label: each.title
            }
            return (
              <a
                key={index}
                href={item.href}
                className={`cursor-pointer flex flex-1 items-center space-x-3 rounded-md px-2 py-3 text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-700 dark:hover:text-gray-200`}
              >
                <span className='flex-1'>{item.label}</span>
              </a>
            )
          })}
        </div>
      </div>
      {children}
    </div>
  )
}

export default ListLayout
