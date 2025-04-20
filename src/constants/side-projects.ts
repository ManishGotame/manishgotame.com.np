import { IPortfolio } from '@/interfaces'

export const sideProjects: IPortfolio[] = [
  {
    id: 0,
    title: 'Open Past Paper',
    description: 'AI Study Tool and Exam builder',
    image: '/side-projects/opp/logo.png',
    link: 'Open-Past-Paper-1db0afa8493780c2a1b0e92528083cef',
    externalLink: 'https://openpastpaper.com',
    active: true,
    tags: ['5K+ Signups', '100+ countries', 'Active']
  },
  {
    id: 1,
    title: 'Route to GPX',
    description: 'Convert Google Maps Routes to GPX',
    image: '/side-projects/route-to-gpx/route-to-gpx.png',
    link: 'Route-To-GPX-1db0afa84937801d87efe8c6d544d37d',
    externalLink: 'https://route-to-gpx.com/',
    active: true,
    tags: ['100+ users', 'Active', 'Cycling'],
    height: 40,
    width: 40
  },
  {
    id: 2,
    title: 'Keras Gender Classifier',
    description: 'Trained neural network from scratch',
    image: '/side-projects/keras-gc/gender-classifier.png',
    link: 'Keras-Gender-Classifier-1db0afa849378061ac9cf99bb1dbcc99',
    externalLink: 'https://gender-classifier.vercel.app/',
    active: false,
    tags: ['AI', 'Keras', 'Machine Learning'],
    height: 40,
    width: 40
  },
  {
    id: 3,
    title: 'React i18n Translate',
    description: 'Translate React components using i18n',
    image: '/side-projects/translate/react-translate.png',
    link: 'React-i18n-Translate-1db0afa849378045a647d2492150d0cf',
    externalLink: 'https://react-i18n-translate.vercel.app/',
    active: true,
    tags: ['Active', 'React', 'i18n'],
    height: 40,
    width: 40
  },
  {
    id: 4,
    title: 'TokenFlow',
    description: 'Internal App to track tokens flow at work',
    image: '/side-projects/tokenflow/tokenflow.png',
    link: 'TokenFlow-1db0afa8493780d7ba2de1d8392b2e79',
    externalLink: 'https://tokenflow.example.com/',
    active: false,
    tags: ['React', 'Blockchain'],
    height: 40,
    width: 40
  }
]
