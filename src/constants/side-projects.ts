import { ProjectCardProps } from '@/components/home/side-projects/ProjectCard'

export const sideProjects: ProjectCardProps[] = [
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
    title: 'Keras Gender Classifier',
    description: 'Trained neural network from scratch',
    image: '/side-projects/keras-gc/gender-classifier.png',
    link: '/projects/gender-classifier',
    externalLink: 'https://gender-classifier.vercel.app/',
    active: false,
    tags: ['AI', 'Keras', 'Machine Learning'],
    height: 40,
    width: 40
  },
  {
    title: 'React i18n Translate',
    description: 'Translate React components using i18n',
    image: '/side-projects/translate/react-translate.png',
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
    active: false,
    tags: ['React', 'Blockchain'],
    height: 40,
    width: 40
  }
]
