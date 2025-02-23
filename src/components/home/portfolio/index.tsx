import { IPortfolio } from '@/interfaces'
import PortfolioCard from './PortfolioCard'

const portfolio: IPortfolio[] = [
  {
    title: 'ACTN Sports',
    description: 'AI Study Tool and exam builder',
    year: '2022',
    image: '/portfolio/actn.png'
  },
  {
    title: 'ACTN Sports platform',
    description: 'AI Study Tool and exam builder',
    year: '2022',
    image: '/portfolio/actn.png'
  },
  {
    title: 'ACTN Sports platform',
    description: 'AI Study Tool and exam builder',
    year: '2022',
    image: '/portfolio/actn.png'
  }
]
const Portfolio = () => {
  return (
    <div className='flex flex-col'>
      <div className='flex flex-col mb-10'>
        <span className='font-bold text-lg'>Portfolio</span>
        <span className='font-regular text-gray-600 dark:text-gray-200'>
          Work I have done for my clients
        </span>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
        {portfolio.map((project, index) => (
          <PortfolioCard key={index} {...project} />
        ))}
      </div>
    </div>
  )
}

export default Portfolio
