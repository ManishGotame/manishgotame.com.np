import { cn } from '@/lib/utils'
import Image from 'next/image'
import { companiesList } from './constants'

const Companies = () => {
  return (
    <div className='w-full flex flex-col items-center justify-center gap-8 py-8'>
      <div className='font-bold text-[20px] text-center'>
        Trusted by Companies like
      </div>
      <div className='flex flex-wrap items-center justify-center gap-8 max-w-4xl'>
        {companiesList.map((company, index) => (
          <div
            key={index}
            onClick={() =>
              window.open(company.link, '_blank', 'noopener,noreferrer')
            }
            className='cursor-pointer hover:opacity-80 transition-opacity'
          >
            <Image
              src={company.image}
              alt={company.title}
              width={company.width}
              height={company.height}
              className={cn(
                'object-contain rounded-md',
                company.invert && 'invert dark:invert-0',
                company.grayscale && 'grayscale'
              )}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Companies
