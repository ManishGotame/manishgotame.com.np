import { CircleArrowRight } from 'lucide-react'
import Link from 'next/link'

import { Badge } from '@/components/ui/badge'

interface AnnoucementBannerProps {
  variant: 'default' | 'secondary' | 'destructive' | 'outline'
  title: string
  description: string
  slug: string
}

export default function AnnoucementBanner({
  variant,
  title,
  description,
  slug
}: AnnoucementBannerProps) {
  return (
    <div className='inline-flex cursor-pointer shadow-lg border-0.5 border-gray-800 p-0.5 gap-2 items-center bg-white hover:bg-gray-100 text-black rounded-3xl p-[1px] pr-2'>
      <Link href={`/changelog`} className='flex items-center'>
        <Badge
          variant={variant}
          className='bg-blue-500 text-white rounded-xl hover:bg-blue-600'
        >
          {title}
        </Badge>
      </Link>
      <Link href={`/changelog/${slug}`} className='hover:bg-gray-100'>
        <div className='flex gap-1 items-center'>
          <p className='text-sm'>{description}</p>
          <CircleArrowRight className='w-5 h-5' />
        </div>
      </Link>
    </div>
  )
}
