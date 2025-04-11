import { Loading as LogoLoading } from '@/components'

export default function Loading() {
  return (
    <div className='flex justify-center items-center h-screen'>
      <LogoLoading text='Hang tight! There are lots of images to load.' />
    </div>
  )
}
