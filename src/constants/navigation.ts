import {
  ExternalLinkIcon,
  GitHubIcon,
  HomeIcon,
  OPPIcon,
  StackIcon,
  TwitterIcon,
  RoutetoGPXLogo
} from '@/components/Icon'

import {
  User,
  Images,
  PenLine,
  LinkedinIcon,
  InstagramIcon
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
    label: '',
    items: [
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
        icon: OPPIcon,
        trailingAccessory: ExternalLinkIcon,
        trailingAction: null,
        isExternal: true
      },
      {
        href: 'https://routetogpx.com',
        label: 'Route to GPX',
        icon: RoutetoGPXLogo,
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
        href: 'https://twitter.com/builtbymanish',
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
