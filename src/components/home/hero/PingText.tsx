import { cn } from '@/lib/utils'

interface PingTextProps {
  children: React.ReactNode
  color: string
}

const PingText: React.FC<PingTextProps> = ({ children, color }) => {
  return (
    <div className='flex flex-row gap-2 items-center'>
      <span className='relative flex h-3 w-3'>
        <span
          className={cn(
            'absolute inline-flex h-full w-full animate-ping rounded-full opacity-75',
            color
          )}
        ></span>
        <span
          className={cn('relative inline-flex h-3 w-3 rounded-full', color)}
        ></span>
      </span>
      <div className='text-regular text-[15px]'>{children}</div>
    </div>
  )
}

export default PingText
