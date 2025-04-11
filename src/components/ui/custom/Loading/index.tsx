import Image from 'next/image'

interface LoadingProps {
  text?: string
}

const Loading = ({ text }: LoadingProps) => {
  return (
    <div className='relative flex flex-col gap-2 items-center'>
      <div className='z-[1] absolute animate-ping'>
        <div className='w-8 h-8 bg-primary/50 rounded-full' />
      </div>
      <div className='z-[2]'>
        <Image src='/logo.png' alt='logo' width={32} height={32} />
      </div>
      {text ? (
        <div className='mt-4 text-md text-gray-700 dark:text-gray-400'>
          {text}
        </div>
      ) : null}
    </div>
  )
}

export default Loading
