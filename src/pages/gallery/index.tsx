import { ExtendedRecordMap } from 'notion-types'
import { NotionAPI } from 'notion-client'
import { useTheme } from '@/Providers'
import { NotionRenderer } from 'react-notion-x'
import { useRouter } from 'next/router'
import { Collection } from 'react-notion-x/build/third-party/collection'
import { Equation } from 'react-notion-x/build/third-party/equation'
import { Modal } from 'react-notion-x/build/third-party/modal'
import { Pdf } from 'react-notion-x/build/third-party/pdf'
import { Code } from 'react-notion-x/build/third-party/code'
import { MenuButton } from '@/components'
import { cn } from '@/lib'

export async function getStaticProps() {
  try {
    const notion = new NotionAPI()
    const recordMap = await notion.getPage(
      process.env.NOTION_GALLERY_PAGE_ID as string
    )

    return {
      props: {
        recordMap
      }
    }
  } catch {
    return {
      notFound: true
    }
  }
}

type PageProps = {
  recordMap: ExtendedRecordMap
}

export default function Gallery({ recordMap }: PageProps) {
  const { theme } = useTheme()
  const router = useRouter()

  if (router.isFallback) {
    return (
      <div className='flex items-center justify-center min-h-screen'>
        <div className='text-xl font-semibold'>Loading...</div>
      </div>
    )
  }

  if (!recordMap) {
    return (
      <div className='flex items-center justify-center min-h-screen'>
        <div className='text-xl font-semibold'>Page not found</div>
      </div>
    )
  }
  return (
    <>
      {/* This section could be a separate header component. */}
      <div
        className={cn(
          'p-5 block lg:hidden fixed bg-white/70 dark:bg-black/70 w-full z-10 flex items-center backdrop-blur-sm transition-opacity duration-200'
          // showName && 'border-b border-gray-200 dark:border-gray-800 shadow-sm'
        )}
      >
        <MenuButton />
        <h2
          className={cn(
            'text-sm ml-1 font-bold text-primary transform-gpu line-clamp-1 lg:hidden'
            // showName ? 'block' : 'hidden'
          )}
        >
          Manish Gotame
        </h2>
      </div>
      <div className='overflow-y-scroll h-screen flex-1'>
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
    </>
  )
}
