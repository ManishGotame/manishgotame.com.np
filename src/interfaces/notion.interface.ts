export interface ITitleResponse {
  title: string
  id: string
  created_at: number
  updated_at: number
}

// Taken from https://github.com/transitive-bullshit/nextjs-notion-starter-kit
export interface PageUrlOverridesMap {
  // maps from a URL path to the notion page id the page should be resolved to
  // (this overrides the built-in URL path generation for these pages)
  [pagePath: string]: string
}

export interface PageUrlOverridesInverseMap {
  // maps from a notion page id to the URL path the page should be resolved to
  // (this overrides the built-in URL path generation for these pages)
  [pageId: string]: string
}

export type NavigationStyle = 'default' | 'custom'
