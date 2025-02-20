import { Header } from '@/components'
import { classNames, getTitles } from '@/utils'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { BlockMap } from 'notion-types'
import { format } from 'date-fns'

interface ListLayoutProps {
  title: string
  blockMap: BlockMap
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
      <div className='bg-white dark:bg-black overflow-y-auto w-[25%] h-[100vh] border-r border-gray-150 pb-10 transition duration-200 ease-in-out dark:border-gray-800 w-[100%] lg:translate-x-0'>
        <div className='sticky top-0 z-10 bg-white dark:bg-black'>
          <Header title={title} />
        </div>
        <div className='p-5'>
          {articleTitles.map((each, index) => {
            const item = {
              href: `/writing/${each.id}`,
              label: each.title,
              created_at: each.created_at
            }
            const isActive = router.asPath === item.href
            return (
              <Link
                key={index}
                href={item.href}
                className={classNames(
                  'cursor-pointer my-1 gap-1 flex flex-1 flex-col space-x-3 rounded-md px-2 py-3 text-[14px] font-medium',
                  isActive
                    ? 'bg-gray-200 text-gray-900 dark:bg-gray-700 dark:text-white'
                    : 'text-gray-900 dark:text-white hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-700 dark:hover:text-white'
                )}
              >
                <div className='flex flex-col'>
                  <span>{item.label}</span>
                  <span className='text-gray-500 dark:text-gray-300 text-[13px]'>
                    {format(new Date(Number(item.created_at)), 'dd MMM, yyyy')}
                  </span>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
      <div className='w-[75%]'>{children}</div>
    </div>
  )
}

export default ListLayout
