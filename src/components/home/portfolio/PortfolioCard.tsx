import Image from 'next/image'

import { IPortfolio } from '@/interfaces'
import Link from 'next/link'

const PortfolioCard = ({
  title,
  description,
  year,
  image,
  link
}: IPortfolio) => {
  return (
    <Link
      href={`/portfolio/${link}`}
      className='flex flex-col justify-between h-full'
    >
      <Image
        src={image}
        alt={title}
        height={338}
        width={600}
        className='h-full w-full object-contain rounded-md border border-gray-150 dark:border-gray-800 mb-3'
      />

      <div>
        <div className='flex justify-between items-baseline mb-1'>
          <h2 className='font-medium text-gray-900 dark:text-white'>{title}</h2>
          <span className='text-sm text-zinc-500 font-mono tracking-tight'>
            {year}
          </span>
        </div>
        <p className='prose prose-zinc leading-[1.2] text-gray-500 dark:text-gray-400 prose-a:text-zinc-600 transition-all prose-a:font-normal'>
          {description}
        </p>
      </div>
    </Link>
  )
}

export default PortfolioCard
