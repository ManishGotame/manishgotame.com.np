import { portfolio } from '@/constants'
import PortfolioCard from './PortfolioCard'
import Link from 'next/link'

const Portfolio = () => {
  return (
    <div className='flex flex-col'>
      <div className='flex flex-col mb-10'>
        <span className='font-bold text-[20px]'>Portfolio</span>
        <span className='font-regular text-[18px] text-gray-600 dark:text-gray-200'>
          Work I have done for my clients
        </span>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 gap-10'>
        {portfolio.slice(0, 4).map((project, index) => (
          <PortfolioCard key={index} {...project} />
        ))}
      </div>
      <div className='flex justify-center mt-10'>
        <Link
          href='/portfolio'
          className='px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-200 bg-gray-100 dark:bg-gray-800 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors'
        >
          See more
        </Link>
      </div>
    </div>
  )
}

export default Portfolio
