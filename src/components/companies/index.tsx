import { cn } from '@/lib/utils'
import Image from 'next/image'

interface ICompany {
  title: string
  image: string
  link: string
  height: number
  width: number
  invert?: boolean
  grayscale?: boolean
}

const companiesList: ICompany[] = [
  {
    title: 'Nexo Games',
    image: '/companies/nexo-games.png',
    link: 'https://nexogames.com',
    height: 50,
    width: 120,
    invert: true
  },
  {
    title: 'Digital Power',
    image: '/companies/dgtlpower.png',
    link: 'https://dgtlpower.com',
    height: 50,
    width: 250
  },
  {
    title: 'Expor',
    image: '/companies/expor.png',
    link: 'https://expor.io',
    height: 50,
    width: 140,
    invert: true,
    grayscale: true
  },
  {
    title: 'Million Dollar Vault',
    image: '/companies/mdv.png',
    link: 'https://milliondollarvault.io',
    height: 50,
    width: 140,
    invert: true
  },
  {
    title: 'Art Can Die',
    image: '/companies/artcandie.png',
    link: 'https://artcandie.io',
    height: 50,
    width: 140,
    invert: false
  },
  {
    title: 'NFT Fever',
    image: '/companies/nft-fever.png',
    link: 'https://nftfever.com',
    height: 50,
    width: 140,
    invert: false,
    grayscale: false
  }
]

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
