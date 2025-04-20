import { GithubIcon, LinkedinIcon } from 'lucide-react'
import { TwitterIcon } from 'lucide-react'
import { Instagram } from 'lucide-react'

const Footer = () => {
  return (
    <footer className='py-4 pt-6 mt-16 pb-16 lg:pb-5 dark:bg-black rounded-sm border-t border-gray-200 dark:border-gray-800'>
      <div className='flex justify-center items-center gap-4'>
        <a
          href='https://x.com/manishgotame'
          target='_blank'
          rel='noopener noreferrer'
          className='text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50'
        >
          <TwitterIcon />
        </a>
        <a
          href='https://github.com/manishgotame'
          target='_blank'
          rel='noopener noreferrer'
          className='text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50'
        >
          <GithubIcon />
        </a>
        <a
          href='https://www.linkedin.com/in/manishgotame/'
          target='_blank'
          rel='noopener noreferrer'
          className='text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50'
        >
          <LinkedinIcon />
        </a>
        <a
          href='https://www.instagram.com/manish.gotame'
          rel='noopener noreferrer'
          className='text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50'
        >
          <Instagram />
        </a>
      </div>
      <div className='text-center text-gray-600 dark:text-gray-400 my-4 text-sm md:text-md'>
        Made by Manish Gotame
      </div>
    </footer>
  )
}

export default Footer
