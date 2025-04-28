import { PortfolioType } from '@/enums'
import { IPortfolio } from '@/interfaces'

export const portfolio: IPortfolio[] = [
  {
    id: 0,
    title: 'ACTN Sports',
    description:
      'Web3 Sports Marketplace. Led the development of the platform from design to MVP in 3 weeks.',
    mini_description: 'Web3 Sports Marketplace',
    year: '2023',
    image:
      'https://personal-site.s3.ap-southeast-2.amazonaws.com/portfolio/actn.png',
    link: 'ACTN-Sports-1d70afa84937807da6c5e1faa2eca787',
    tags: ['Web3', 'React', 'Moralis'],
    type: PortfolioType.COMMERCIAL
  },
  {
    id: 1,
    title: 'Million Dollar Vault',
    description:
      'NFT Project that made over 200K+ in sales. Built the smart contract and the web app.',
    mini_description: 'Frontend and Smart Contract',
    year: '2022',
    image:
      'https://personal-site.s3.ap-southeast-2.amazonaws.com/portfolio/mdv.png',
    link: 'Million-Dollar-Vault-1dc0afa8493780239f12c37aa6f9e168',
    tags: ['Solidity', 'Firebase', 'Python'],
    type: PortfolioType.COMMERCIAL
  },
  {
    id: 2,
    title: 'NFT Fever',
    description:
      'E-Learning Platform. Led the development from design to MVP in 2 months.',
    mini_description: 'E-Learning Platform',
    year: '2022',
    image:
      'https://personal-site.s3.ap-southeast-2.amazonaws.com/portfolio/nftfever.png',
    link: 'NFT-dev-1d70afa84937800eb73cf34e316c43ce',
    tags: ['React', 'Firebase'],
    type: PortfolioType.COMMERCIAL
  },
  {
    id: 3,
    title: 'Art Can Die',
    description:
      'Proposed contract changes for existing smart contract and worked on Wallet integrations for the UI.',
    year: '2022',
    image:
      'https://personal-site.s3.ap-southeast-2.amazonaws.com/portfolio/artcandie.png',
    link: 'Art-Can-Die-1db0afa84937801c814afde8a024064d',
    mini_description: 'Smart Contract Optimization',
    tags: ['Node', 'Solidity'],
    type: PortfolioType.COMMERCIAL
  },
  {
    id: 4,
    title: 'Research Funding Club',
    description:
      'Worked on smart contract optimization to save Gas fees during mint transactions.',
    mini_description: 'Smart Contract Optimization',
    year: '2022',
    image:
      'https://personal-site.s3.ap-southeast-2.amazonaws.com/portfolio/researchfundnft.png',
    link: 'Research-Funding-Club-1dc0afa849378036b508c315a47e9543',
    tags: ['React', 'Solidity'],
    type: PortfolioType.COMMERCIAL
  }
]
