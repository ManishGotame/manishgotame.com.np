import { IPortfolio } from '@/interfaces'
import { ExternalLink } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from '@/components/ui/tooltip'

const ProjectCard: React.FC<IPortfolio> = ({
  title,
  description,
  image,
  link,
  externalLink,
  active,
  tags,
  height = 48,
  width = 48
}) => {
  return (
    <Link
      href={`/portfolio/${link}?tab=personal`}
      className='cursor-pointer bg-lotion border border-gray-150 dark:border-gray-800 hover:bg-gray-100 dark:hover:bg-gray-800 relative group rounded-lg dark:bg-erie overflow-hidden min-h-[210px]'
    >
      <div className='p-4 flex flex-col justify-between h-full pb-10'>
        <div className='flex items-start justify-between'>
          <Image
            src={image}
            alt={title}
            className='rounded-md'
            width={width}
            height={height}
          />
          {externalLink ? (
            <div
              onClick={(e) => {
                e.preventDefault()
                e.stopPropagation()
                window.open(externalLink, '_blank', 'noopener,noreferrer')
              }}
              className='text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-transform hover:scale-[1.2] cursor-pointer'
            >
              <ExternalLink className='w-5 h-5' />
            </div>
          ) : null}
        </div>
        <div>
          <h3 className='text-[15px] font-semibold text-gray-900 dark:text-white flex items-center gap-2'>
            {title}
            {active ? (
              <TooltipProvider delayDuration={100}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <span className='w-2 h-2 rounded-full bg-green-500 cursor-pointer'></span>
                  </TooltipTrigger>
                  <TooltipContent side='top'>
                    <p>Active</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            ) : null}
          </h3>
          <p className='text-[14px] font-regular text-gray-600 dark:text-gray-400 mt-1'>
            {description}
          </p>
          {tags && tags.length > 0 ? (
            <div className='flex gap-2 mt-3'>
              {tags.map((tag, index) => (
                <span
                  key={index}
                  className='px-2 py-0.5 rounded-md bg-gray-150 dark:bg-[#2C2C2E] text-gray-700 dark:text-gray-300 text-xs'
                >
                  {tag}
                </span>
              ))}
            </div>
          ) : (
            <div className='flex gap-2 my-4' />
          )}
        </div>
      </div>
    </Link>
  )
}

export default ProjectCard
