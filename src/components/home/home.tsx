/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'

import {
  Blog,
  Companies,
  Footer,
  Hero,
  Photos,
  Portfolio,
  SideProjects
} from '@/components'
import { motion } from 'framer-motion'

export default function HomePage({ blogPosts }: { blogPosts: any[] }) {
  return (
    <div className='overflow-hidden'>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.25, ease: 'easeInOut' }}
      >
        <div className='flex flex-col gap-[138px] px-[30px] md:px-[30px] container max-w-5xl mx-auto bg-white dark:bg-black text-black dark:text-white'>
          <Hero latestPost={blogPosts.length > 0 ? blogPosts[0] : null} />
          <SideProjects />
          <Companies />
          <Portfolio />
          <Blog blogPosts={blogPosts} />
          <Photos />
        </div>
        <Footer />
      </motion.div>
    </div>
  )
}
