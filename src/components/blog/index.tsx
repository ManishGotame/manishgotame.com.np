interface TitleProps {
  title: string
  date: string
}

const Title = ({ title, date }: TitleProps) => {
  return (
    <div className='cursor-pointer flex sm:items-center flex-col sm:flex-row gap-0.5 sm:gap-4 group'>
      <span className='line-clamp-2 font-medium text-gray-1000 group-hover:text-blue-600 group-hover:underline dark:text-gray-100 dark:group-hover:text-blue-500'>
        {title}
      </span>
      <div className='hidden sm:flex flex-1 border-t border-gray-300 border-dashed shrink dark:border-gray-800' />
      <span className='text-gray-500 dark:text-gray-400 font-mono text-sm'>
        {date}
      </span>
    </div>
  )
}

const Blog = () => {
  return (
    <div className='flex flex-col space-y-8'>
      <div className='flex flex-col'>
        <span className='font-bold text-lg'>Writings</span>
        <span className='font-regular text-gray-600 dark:text-gray-200'>
          Things I work on and learn about
        </span>
      </div>

      <div className='flex flex-col space-y-3'>
        <Title
          title='Learnings from working on Open Past Paper'
          date='Feb 16, 2024'
        />
        <Title
          title='Learnings from working on Open Past Paper'
          date='Feb 16, 2024'
        />
        <Title
          title='Learnings from working on Open Past Paper'
          date='Feb 16, 2024'
        />
        <Title
          title='Learnings from working on Open Past Paper'
          date='Feb 16, 2024'
        />
      </div>
    </div>
  )
}

export default Blog
