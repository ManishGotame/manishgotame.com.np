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
import { BlockMap } from 'notion-types'

export default function HomePage({ blockMap }: { blockMap: BlockMap }) {
  return (
    <div className='overflow-hidden'>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.25, ease: 'easeInOut' }}
      >
        <div className='flex flex-col gap-[138px] px-[30px] md:px-[30px] container max-w-5xl mx-auto bg-white dark:bg-black text-black dark:text-white'>
          <Hero blockMap={blockMap} />
          <SideProjects />
          <Companies />
          <Portfolio />
          <Blog blockMap={blockMap} />
          <Photos />
        </div>
        <Footer />
      </motion.div>
    </div>
  )
}
