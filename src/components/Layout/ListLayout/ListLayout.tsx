import { Header } from '@/components'
import { classNames, getTitles } from '@/utils'
import Link from 'next/link'
import { useRouter } from 'next/router'
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
  const router = useRouter()
  const articleTitles = getTitles(blockMap)

  return (
    <div className='w-full flex flex-row gap-1'>
      <div className='bg-black overflow-y-auto w-[30%] h-[100vh] border-r border-gray-150 pb-10 transition duration-200 ease-in-out dark:border-gray-800 w-[100%] lg:translate-x-0'>
        <Header title={title} />
        <div className='p-5'>
          {articleTitles.map((each, index) => {
            const item = {
              href: `/writing/${each.id}`,
              label: each.title
            }
            const isActive = router.asPath === item.href
            return (
              <Link
                key={index}
                href={item.href}
                className={classNames(
                  'cursor-pointer my-1 flex flex-1 items-center space-x-3 rounded-md px-2 py-3 text-sm font-medium',
                  isActive
                    ? 'bg-gray-200 text-gray-900 dark:bg-gray-700 dark:text-gray-200'
                    : 'text-gray-700 dark:text-gray-200 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-700 dark:hover:text-gray-200'
                )}
              >
                <span className='flex-1'>{item.label}</span>
              </Link>
            )
          })}
        </div>
      </div>
      <div className='w-[70%]'>{children}</div>
    </div>
  )
}

export default ListLayout
