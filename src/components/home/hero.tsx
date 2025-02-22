import { cn } from '@/lib/utils'
import { AnnoucementBanner } from '../ui/custom'
import Link from 'next/link'

interface PingTextProps {
  children: React.ReactNode
  color: string
}

const PingText: React.FC<PingTextProps> = ({ children, color }) => {
  return (
    <div className='flex flex-row gap-2 items-center'>
      <span className='relative flex h-3.5 w-3.5'>
        <span
          className={cn(
            'absolute inline-flex h-full w-full animate-ping rounded-full opacity-75',
            color
          )}
        ></span>
        <span
          className={cn('relative inline-flex h-3.5 w-3.5 rounded-full', color)}
        ></span>
      </span>
      <div className='text-regular text-[15px]'>{children}</div>
    </div>
  )
}

const Hero = () => {
  return (
    <div className='pt-32'>
      <div className=''>
        <AnnoucementBanner
          variant='default'
          title='Writing'
          description='Google Maps to GPX and vice versa.'
          slug='new-feature'
        />
        <h1 className='mt-[12px] text-4xl font-regular mb-[19px]'>
          Hi, I&apos;m{' '}
          <span className='text-black dark:text-white font-bold'>Manish!</span>
        </h1>
        <h2 className='text-xl mb-[1px]'>
          Full Stack Developer, Cyclist, and occasional Essayist.
        </h2>
        <p className='text-gray-600 dark:text-gray-400 text-base'>
          (Money-ish for non-native speakers)
        </p>
      </div>

      <div className='mt-16'>
        <div className='font-regular text-[15px] mb-[16px]'>Currently</div>
        <div className='flex flex-col gap-[12px]'>
          <PingText color='bg-[#69E5FE]'>
            <div className='flex flex-row gap-1'>
              <span>Working as a Frontend Developer for </span>
              <Link
                href='https://dgtlpower.com'
                className='underline decoration-[#69E5FE] underline-offset-[3px]'
              >
                DGTL Power UK.
              </Link>
            </div>
          </PingText>
          <PingText color='bg-blue-500'>
            <div className='flex flex-row gap-1'>
              <span>Building </span>
              <Link
                href='https://openpastpaper.com'
                className='underline decoration-blue-500 underline-offset-[3px]'
              >
                Open Past Paper
              </Link>
              <span> and other stuffs on weekends.</span>
            </div>
          </PingText>
          <PingText color='bg-green-500'>
            <div className='flex flex-row gap-1'>
              <span>Freelancing on </span>
              <Link
                href='https://dgtlpower.com'
                className='underline decoration-green-500 underline-offset-[3px]'
              >
                Upwork
              </Link>
              <span> and helping clients all over the world.</span>
            </div>
          </PingText>
        </div>
      </div>
    </div>
  )
}

export default Hero
