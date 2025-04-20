export interface ICompany {
  title: string
  image: string
  link: string
  height: number
  width: number
  invert?: boolean
  grayscale?: boolean
}

export interface IPortfolio {
  externalLink?: string
  id: number
  title: string
  description: string
  mini_description?: string
  year?: string
  image: string
  link?: string
  tags?: string[]
  active?: boolean
  height?: number
  width?: number
}

export interface IPhoto {
  title: string
  description: string
  image: string
}
