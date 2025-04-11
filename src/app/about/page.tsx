import Footer from '@/components/footer'
import Image from 'next/image'
import Link from 'next/link'

export default function About() {
  return (
    <>
      <div className='w-full bg-white dark:bg-black p-4 md:p-6'>
        <div className='relative max-w-5xl mx-auto min-h-[500px] md:min-h-[600px]'>
          <div className='absolute w-[35%] left-0 top-[25%] aspect-square overflow-hidden'>
            <Image
              src='/photos/ABOUT_LEFT.png'
              alt='Portrait photo'
              fill
              priority
              className='object-cover rounded-md'
            />
          </div>
          <div className='z-[2] absolute w-[40%] left-[30%] top-[15%] overflow-hidden'>
            <div className='relative aspect-[0.8] w-full'>
              <Image
                src='/photos/IMG_3.jpg'
                alt='Mountain landscape'
                fill
                className='object-cover rounded-md'
              />
            </div>
          </div>
          <div className='absolute w-[40%] right-0 top-[40%] aspect-[2/1] overflow-hidden'>
            <Image
              src='/photos/ABOUT_RIGHT.png'
              alt='Mountain biking scene'
              fill
              className='object-cover rounded-md'
            />
          </div>
        </div>

        {/* Text content section */}
        <div className='max-w-xl mx-auto mt-[-50] md:mt-24 px-4 md:px-0 text-black dark:text-white'>
          <h1 className='text-[28px] md:text-[35px] font-semibold mb-6 md:mb-8'>
            Hi again, I&apos;m Manish!
          </h1>

          <div className='space-y-6 md:space-y-10 text-[16px] md:text-[18px] font-semibold'>
            <p>
              I am a Software Developer living in Nepal. I currently work at
              <Link
                href='https://dgtlpower.com'
                className='mx-1 inline-block underline decoration-[#69E5FE] underline-offset-[3px]'
              >
                Digital Power
              </Link>
              , building products that optimize electricity and gas consumption
              in the European and US markets. I mainly focus on the mobile and
              web applications and occasionally work on the backend.
            </p>

            <p>
              Previously, I freelanced, developing blockchain and web scraping
              applications where i honed in most of my software development
              skills. Later, I moved into full-stack development, helping build
              E-Learning platforms and web3 marketplaces.
            </p>

            <p>
              Overall, I enjoy being a generalist and love to go deep dive into
              how things work, down to the bit levels and build an understanding
              from bottom to the top.
            </p>

            <p>
              Beyond software, I love food and outdoor adventures like cycling,
              trekking, and motorcycle touring. There is no greater freedom than
              exploring the world with a bag on your bike and a destination in
              mind. I&apos;m grateful for the flexibility to work from anywhere.
              Check out my{' '}
              <Link
                href='/gallery'
                className='underline decoration-[#69E5FE] underline-offset-[3px]'
              >
                Gallery
              </Link>{' '}
              for photos from my trips!
            </p>

            <p>If you want to chat, feel free to reach out.</p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
