import { Footer, PageHeader } from '@/components'
import PortfolioCard from '@/components/home/portfolio/PortfolioCard'
import { portfolio } from '@/constants'

export default function PortfolioPage() {
  return (
    <>
      <PageHeader />
      <div className='mt-20 flex flex-col gap-[138px] px-[30px] md:px-[30px] container max-w-5xl mx-auto bg-white dark:bg-black text-black dark:text-white'>
        <div className='flex flex-col'>
          <div className='flex flex-col mb-10'>
            <span className='font-bold text-lg'>Portfolio</span>
            <span className='font-regular text-gray-600 dark:text-gray-200'>
              Work I have done for my clients
            </span>
          </div>
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-10'>
            {portfolio.map((project, index) => (
              <PortfolioCard key={index} {...project} />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
