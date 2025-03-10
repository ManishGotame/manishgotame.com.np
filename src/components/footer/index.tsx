import { GithubIcon } from 'lucide-react'
import { TwitterIcon } from 'lucide-react'
import { Instagram } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  return (
    <footer className='py-4'>
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
          href='https://www.instagram.com/manish.gotame'
          target='_blank'
          rel='noopener noreferrer'
          className='text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50'
        >
          <Instagram />
        </a>
      </div>
      <div className='text-center text-gray-600 dark:text-gray-400 my-4 text-sm md:text-md'>
        Copyright © {currentYear} Manish Gotame. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer
