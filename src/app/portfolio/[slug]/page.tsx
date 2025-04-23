import { getBlockTitle } from 'notion-utils'
import { cn, notion } from '@/lib'
import { CloudAlertIcon, ExternalLink } from 'lucide-react'
import { Post } from '@/components'
import { Roboto } from 'next/font/google'
import { portfolio, sideProjects } from '@/constants'
import { PortfolioType } from '@/enums'
import { IPortfolio } from '@/interfaces'
import Image from 'next/image'
import Link from 'next/link'

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
  display: 'swap'
})

export const revalidate = 30

interface ProjectsTabProps {
  title: string
  details: IPortfolio | undefined
}

const PersonalProjectsTab = ({ title, details }: ProjectsTabProps) => {
  if (!details) return null

  return (
    <div className='flex flex-col gap-8'>
      <span
        className={cn(
          roboto.className,
          'text-sm font-semibold uppercase tracking-wider text-black dark:text-white'
        )}
      >
        PERSONAL PROJECT
      </span>
      <div className='flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 sm:gap-4'>
        <div className='flex flex-col sm:flex-row sm:items-center gap-4'>
          <Image
            src={details.image}
            alt={title}
            className='rounded-md w-20 sm:w-[72px]'
            width={72}
            height={72}
          />

          {/* Title and Tags Section */}
          <div className='flex flex-col gap-1'>
            <h1
              className={cn(roboto.className, 'text-2xl sm:text-3xl font-bold')}
            >
              {title}
            </h1>
            <div className='flex flex-wrap gap-2'>
              {details.tags
                ?.sort((a, b) => (a === 'Active' ? -1 : b === 'Active' ? 1 : 0))
                .map((tag, index) => (
                  <span
                    key={index}
                    className={cn(
                      'inline-flex items-center rounded-full px-3 py-1 text-xs font-medium ring-1 ring-inset shadow-sm',
                      tag === 'Active'
                        ? 'bg-green-100 text-green-700 ring-green-200 dark:bg-green-900/30 dark:text-green-300 dark:ring-green-700'
                        : 'bg-gray-100 text-gray-600 ring-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:ring-gray-700'
                    )}
                  >
                    {tag}
                  </span>
                ))}
            </div>
          </div>
        </div>

        <Link
          href={details.externalLink || ''}
          target='_blank'
          rel='noopener noreferrer'
          className='flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-200 bg-gray-100 dark:bg-gray-800 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors w-full sm:w-auto'
        >
          <ExternalLink className='w-4 h-4' />
          Open App
        </Link>
      </div>
    </div>
  )
}

const CommercialProjectsTab = ({ title, details }: ProjectsTabProps) => {
  if (!details) return null

  return (
    <div className='flex flex-col gap-4'>
      <span
        className={cn(
          roboto.className,
          'text-sm font-semibold uppercase tracking-wider text-black dark:text-white'
        )}
      >
        PROJECT
      </span>
      <h1 className={cn(roboto.className, 'text-6xl font-medium')}>{title}</h1>
      <div className='text-gray-500'>{details?.tags?.join(' · ') || ''}</div>
    </div>
  )
}

export default async function Page({
  params
}: {
  params: Promise<{ slug: string }>
}) {
  try {
    const { slug } = await params
    const data = await notion.getPage(slug as string)

    const keys = Object.keys(data?.block || {})
    const block = data?.block?.[keys[0]]?.value
    const title = getBlockTitle(block, data)
    const project =
      portfolio.find((project) => project.link === slug) ||
      sideProjects.find((project) => project.link === slug)

    return (
      <Post
        blockMap={data}
        link='/portfolio'
        title={title}
        header={
          project?.type === PortfolioType.PERSONAL ? (
            <PersonalProjectsTab title={title} details={project} />
          ) : (
            <CommercialProjectsTab title={title} details={project} />
          )
        }
      />
    )
  } catch {
    return (
      <div className='flex min-h-screen items-center justify-center flex-col gap-2'>
        <CloudAlertIcon className='w-10 h-10' />
        <h1 className='text-md font-medium'>Oh uh! Not Found</h1>
      </div>
    )
  }
}
