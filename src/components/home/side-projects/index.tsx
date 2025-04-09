'use client'

import { sideProjects } from '@/constants'
import ProjectCard from './ProjectCard'

const SideProjects = () => {
  return (
    <div className='flex flex-col gap-10'>
      <div className='flex flex-col'>
        <span className='font-bold text-[20px]'>Side Projects</span>
        <span className='font-regular text-[18px] text-gray-600 dark:text-gray-200'>
          Tinkering through code in various domains
        </span>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
        {sideProjects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  )
}

export default SideProjects
