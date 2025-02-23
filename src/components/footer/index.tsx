import { HeartIcon } from 'lucide-react'

const Footer = () => {
  return (
    <div
      style={{
        textAlign: 'center',
        padding: '1rem',
        borderTop: '1px solid grey'
      }}
    >
      Made with <HeartIcon className='inline-block h-4 w-4' /> by Manish
    </div>
  )
}

export default Footer
