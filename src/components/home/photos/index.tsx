import Image from 'next/image'
import { photos } from '@/constants'
import Link from 'next/link'

const Photos = () => {
  return (
    <div className='flex flex-col'>
      <div className='flex flex-col mb-10'>
        <span className='font-bold text-lg'>Photos</span>
        <span className='font-regular text-gray-600 dark:text-gray-200'>
          Few pictures from my travels
        </span>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
        {photos.map((photo) => (
          <div key={photo.title} className='relative h-72'>
            <Image
              src={photo.image}
              alt={photo.title}
              fill
              sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
              className='object-cover rounded-lg'
            />
          </div>
        ))}
      </div>
      <div className='flex justify-center mt-10'>
        <Link
          href='/gallery'
          className='px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-200 bg-gray-100 dark:bg-gray-800 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors'
        >
          See more
        </Link>
      </div>
    </div>
  )
}

export default Photos
