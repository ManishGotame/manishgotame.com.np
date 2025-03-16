import { cn } from '@/lib/utils'
import Image from 'next/image'
import Marquee from 'react-fast-marquee'
import { companiesList } from '@/constants'

const Companies = () => {
  return (
    <div className='w-full flex flex-col items-center justify-center gap-8 py-8'>
      <div className='font-bold text-[20px] text-center'>
        Trusted by Companies like
      </div>
      <Marquee>
        {companiesList.map((company, index) => (
          <div
            key={index}
            onClick={() =>
              window.open(company.link, '_blank', 'noopener,noreferrer')
            }
            className='cursor-pointer hover:opacity-80 transition-opacity mr-8'
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
      </Marquee>
    </div>
  )
}

export default Companies
