import Image from 'next/image'

interface IPhoto {
  title: string
  description: string
  image: string
}

const photos: IPhoto[] = [
  {
    title: 'Photo 1',
    description: 'Description 1',
    image: '/photos/IMG_1.jpg'
  },
  {
    title: 'Photo 2',
    description: 'Description 2',
    image: '/photos/IMG_2.jpg'
  },
  {
    title: 'Photo 3',
    description: 'Description 3',
    image: '/photos/IMG_3.jpg'
  },
  {
    title: 'Photo 4',
    description: 'Description 4',
    image: '/photos/IMG_4.jpg'
  }
]

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
    </div>
  )
}

export default Photos
