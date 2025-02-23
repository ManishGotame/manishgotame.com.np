import ProjectCard, { ProjectCardProps } from './ProjectCard'

const projects: ProjectCardProps[] = [
  {
    title: 'Open Past Paper',
    description: 'AI Study Tool and Exam builder',
    image: '/side-projects/opp/logo.png',
    link: '/projects/opp',
    externalLink: 'https://openpastpaper.com',
    active: true,
    tags: ['5K+ Signups', '100+ countries', 'Active']
  },
  {
    title: 'Open Past Paper',
    description: 'AI Study Tool and exam builder',
    image: '/side-projects/opp/logo.png',
    link: '/projects/opp',
    externalLink: 'https://openpastpaper.com',
    active: false
  },
  {
    title: 'Open Past Paper',
    description: 'AI Study Tool and exam builder',
    image: '/side-projects/opp/logo.png',
    link: '/projects/opp',
    externalLink: 'https://openpastpaper.com',
    active: false
  },
  {
    title: 'Open Past Paper',
    description: 'AI Study Tool and exam builder',
    image: '/side-projects/opp/logo.png',
    link: '/projects/opp',
    externalLink: 'https://openpastpaper.com',
    active: false
  },
  {
    title: 'Open Past Paper',
    description: 'AI Study Tool and exam builder',
    image: '/side-projects/opp/logo.png',
    link: '/projects/opp',
    externalLink: 'https://openpastpaper.com',
    active: false
  }
]

const SideProjects = () => {
  return (
    <div className='flex flex-col gap-10'>
      <div className='flex flex-col'>
        <span className='font-bold text-[20px]'>Side Projects</span>
        <span className='font-regular text-[18px] text-gray-600 dark:text-gray-200'>
          Tinkering in various domains
        </span>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  )
}

export default SideProjects
