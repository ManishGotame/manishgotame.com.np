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
  title: string
  description: string
  year: string
  image: string
  link?: string
  tags?: string[]
}

export interface IPhoto {
  title: string
  description: string
  image: string
}
