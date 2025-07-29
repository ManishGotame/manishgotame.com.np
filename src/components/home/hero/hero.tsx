import { AnnoucementBanner } from '../../ui/custom'
import Link from 'next/link'
import PingText from './PingText'
import { getTitles } from '@/lib'
import { BlockMap } from 'notion-types'

interface HeroProps {
  blockMap: BlockMap
}

const Hero: React.FC<HeroProps> = ({ blockMap }) => {
  return (
    <div className='pt-32'>
      <div>
        {!blockMap ? null : (
          <>
            {(() => {
              const articleTitles = getTitles(blockMap)
              const oneMonthAgo = new Date()
              oneMonthAgo.setMonth(oneMonthAgo.getMonth() - 2)

              const showBanner =
                articleTitles[0].created_at &&
                new Date(articleTitles[0].created_at) > oneMonthAgo

              return (
                <>
                  {showBanner ? (
                    <AnnoucementBanner
                      variant='default'
                      title='New'
                      description={articleTitles[0].title}
                      slug={articleTitles[0].id}
                    />
                  ) : null}
                </>
              )
            })()}
          </>
        )}
        <h1 className='text-[40px] font-regular mb-[19px]'>
          Hi, I&apos;m{' '}
          <span className='text-black dark:text-white font-bold'>Manish!</span>
        </h1>
        <h2 className='text-xl mb-[1px]'>
          Software Developer, Cyclist, and occasional Essayist.
        </h2>
        <p className='text-gray-600 dark:text-gray-400 text-base'>
          (Money-sh for non-native speakers)
        </p>
      </div>

      <div className='mt-20'>
        <div className='font-regular text-[15px] mb-[16px]'>Currently</div>
        <div className='flex flex-col gap-[12px]'>
          <PingText color='bg-[#69E5FE]'>
            <span>
              Working as a Software Developer for{' '}
              <Link
                href='https://dgtlpower.com'
                target='_blank'
                className='underline decoration-[#69E5FE] underline-offset-[3px]'
              >
                Digital Power.
              </Link>
            </span>
          </PingText>
          <PingText color='bg-blue-500'>
            <span>
              <span>Building </span>
              <Link
                href='https://openpastpaper.com'
                target='_blank'
                className='underline decoration-blue-500 underline-offset-[3px]'
              >
                Open Past Paper
              </Link>
              <span> and other stuffs on weekends.</span>
            </span>
          </PingText>
          <PingText color='bg-green-500'>
            <span>
              <span>Freelancing on </span>
              <Link
                href='https://www.upwork.com/en-gb/freelancers/~0125f2add906ad5883'
                target='_blank'
                className='underline decoration-green-500 underline-offset-[3px]'
              >
                Upwork
              </Link>
              <span> and helping clients all over the world.</span>
            </span>
          </PingText>
        </div>
      </div>
    </div>
  )
}

export default Hero
