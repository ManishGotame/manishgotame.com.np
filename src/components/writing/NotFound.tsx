import { CloudAlertIcon } from 'lucide-react'

export default function NotFound() {
  return (
    <div className='flex min-h-screen items-center justify-center flex-col gap-2'>
      <CloudAlertIcon className='w-10 h-10' />
      <h1 className='text-md font-medium'>Post not found</h1>
    </div>
  )
}
