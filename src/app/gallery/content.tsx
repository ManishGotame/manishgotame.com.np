'use client'

import 'prismjs/themes/prism-tomorrow.css'
import 'react-notion-x/src/styles.css'
import { ExtendedRecordMap } from 'notion-types'
import { NotionRenderer } from 'react-notion-x'
import { useTheme } from '@/Providers'
import { Collection } from 'react-notion-x/build/third-party/collection'
import { Equation } from 'react-notion-x/build/third-party/equation'
import { Modal } from 'react-notion-x/build/third-party/modal'
import { Pdf } from 'react-notion-x/build/third-party/pdf'
import { Code } from 'react-notion-x/build/third-party/code'
import { motion } from 'framer-motion'

export default function ClientGalleryContent({
  recordMap
}: {
  recordMap: ExtendedRecordMap | null
}) {
  const { theme } = useTheme()

  if (!recordMap) {
    return (
      <div className='flex items-center justify-center min-h-screen'>
        <div className='text-xl font-semibold'>Page not found</div>
      </div>
    )
  }

  return (
    <div className='overflow-hidden'>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.25, ease: 'easeInOut' }}
      >
        <div className='overflow-y-scroll h-screen flex-1'>
          <style jsx global>{`
            .medium-zoom-image {
              border-radius: 0 !important;
            }
          `}</style>
          <NotionRenderer
            recordMap={recordMap}
            darkMode={theme === 'dark'}
            disableHeader={true}
            components={{
              Code,
              Collection,
              Equation,
              Pdf,
              Modal
            }}
          />
        </div>
      </motion.div>
    </div>
  )
}
