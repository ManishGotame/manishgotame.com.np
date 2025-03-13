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
    title: 'Route to GPX',
    description: 'Convert Google Maps Routes to GPX',
    image: '/side-projects/route-to-gpx/route-to-gpx.png',
    link: '/projects/route-to-gpx',
    externalLink: 'https://route-to-gpx.com/',
    active: true,
    tags: ['100+ users', 'Active', 'Cycling'],
    height: 40,
    width: 40
  },
  {
    title: 'Gender Classifier',
    description: 'Trained neural network from scratch',
    image: '/side-projects/gender-classifier/gender-classifier.png',
    link: '/projects/gender-classifier',
    externalLink: 'https://gender-classifier.vercel.app/',
    active: true,
    tags: ['AI', 'Open Source'],
    height: 40,
    width: 40
  },
  {
    title: 'React i18n Translate',
    description: 'Translate React components using i18n',
    image: '/side-projects/react-i18n-translate/react-i18n-translate.png',
    link: '/projects/react-i18n-translate',
    externalLink: 'https://react-i18n-translate.vercel.app/',
    active: true,
    tags: ['Active', 'React', 'i18n'],
    height: 40,
    width: 40
  },
  {
    title: 'TokenFlow',
    description: 'Internal App to track tokens flow at work',
    image: '/side-projects/tokenflow/tokenflow.png',
    link: '/projects/tokenflow',
    externalLink: 'https://tokenflow.example.com/',
    active: true,
    tags: ['Active', 'React', 'i18n'],
    height: 40,
    width: 40
  },
  {
    title: 'Exam Extractor',
    description: 'Extract past papers from PDF files',
    image: '/side-projects/exam-extractor/exam-extractor.png',
    link: '/projects/exam-extractor',
    externalLink: 'https://exam-extractor.example.com/',
    active: true,
    tags: ['Active', 'React', 'i18n'],
    height: 40,
    width: 40
  }
]

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
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  )
}

export default SideProjects
