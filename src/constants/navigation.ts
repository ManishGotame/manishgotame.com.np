import {
  ExternalLinkIcon,
  GitHubIcon,
  HomeIcon,
  StackIcon,
  TwitterIcon
} from '@/components/Icon'

import {
  User,
  Images,
  PenLine,
  LinkedinIcon,
  InstagramIcon,
  LayoutGrid
} from 'lucide-react'

export const routes = [
  {
    label: null,
    items: [
      {
        href: '/',
        label: 'Home',
        icon: HomeIcon,
        trailingAccessory: null,
        trailingAction: null,
        isExternal: false
      },
      {
        href: '/about',
        label: 'About',
        icon: User,
        trailingAccessory: null,
        trailingAction: null,
        isExternal: false
      },
      {
        href: '/portfolio',
        label: 'Portfolio',
        icon: StackIcon,
        trailingAccessory: null,
        trailingAction: null,
        isExternal: false
      },
      {
        href: '/writing',
        label: 'Writing',
        icon: PenLine,
        trailingAccessory: null,
        trailingAction: null,
        isExternal: false
      }
    ]
  },
  {
    label: 'Me',
    items: [
      // {
      //   href: '/activity',
      //   label: 'Activity Heatmap',
      //   icon: StackIcon,
      //   trailingAccessory: null,
      //   isActive: router.asPath.indexOf('/activity') >= 0,
      //   trailingAction: null,
      //   isExternal: false
      // },
      {
        href: '/gallery',
        label: 'Gallery',
        icon: Images,
        trailingAccessory: null,
        trailingAction: null,
        isExternal: false
      }
    ]
  },
  {
    label: 'Projects',
    items: [
      {
        href: 'https://openpastpaper.com',
        label: 'Open Past Paper',
        icon: LayoutGrid,
        trailingAccessory: ExternalLinkIcon,
        trailingAction: null,
        isExternal: true
      }
    ]
  },
  {
    label: 'Online',
    items: [
      {
        href: 'https://twitter.com/manishgotame',
        label: 'X',
        icon: TwitterIcon,
        trailingAccessory: ExternalLinkIcon,
        trailingAction: null,
        isExternal: true
      },

      {
        href: 'https://github.com/manishgotame',
        label: 'GitHub',
        icon: GitHubIcon,
        trailingAccessory: ExternalLinkIcon,
        trailingAction: null,
        isExternal: true
      },

      {
        href: 'https://www.linkedin.com/in/manishgotame/',
        label: 'LinkedIn',
        icon: LinkedinIcon,
        trailingAccessory: ExternalLinkIcon,
        trailingAction: null,
        isExternal: true
      },

      {
        href: 'https://www.instagram.com/manish.gotame/',
        label: 'Instagram',
        icon: InstagramIcon,
        trailingAccessory: ExternalLinkIcon,
        trailingAction: null,
        isExternal: true
      }
    ]
  }
]
