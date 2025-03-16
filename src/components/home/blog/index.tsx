import { getTitles } from '@/lib'
import { format } from 'date-fns'
import Link from 'next/link'
import { BlockMap } from 'notion-types'

interface TitleProps {
  title: string
  date: string
  id: string
}

const Title = ({ title, date, id }: TitleProps) => {
  return (
    <div className='cursor-pointer flex sm:items-center flex-col sm:flex-row gap-0.5 sm:gap-4 group'>
      <Link
        href={`/writing/${id}`}
        className='line-clamp-2 font-medium text-gray-1000 group-hover:text-blue-600 group-hover:underline dark:text-gray-100 dark:group-hover:text-blue-500'
      >
        {title}
      </Link>
      <div className='hidden sm:flex flex-1 border-t border-gray-300 border-dashed shrink dark:border-gray-800' />
      <span className='text-gray-500 dark:text-gray-400 font-mono text-sm'>
        {date}
      </span>
    </div>
  )
}

interface BlogProps {
  blockMap: BlockMap
}

const Blog = ({ blockMap }: BlogProps) => {
  if (!blockMap) {
    return null
  }

  const articleTitles = getTitles(blockMap)

  return (
    <div className='flex flex-col space-y-8'>
      <div className='flex flex-col'>
        <span className='font-bold text-lg'>Writings</span>
        <span className='font-regular text-gray-600 dark:text-gray-200'>
          Things I work on and learn about
        </span>
      </div>

      <div className='flex flex-col space-y-3'>
        {articleTitles.slice(0, 8).map((each) => (
          <Title
            key={each.id}
            title={each.title}
            date={format(each.created_at, 'MMM d, yyyy')}
            id={each.id}
          />
        ))}
      </div>
      <div className='flex justify-center mt-10'>
        <Link
          href='/writing'
          className='px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-200 bg-gray-100 dark:bg-gray-800 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors'
        >
          Read more
        </Link>
      </div>
    </div>
  )
}

export default Blog
