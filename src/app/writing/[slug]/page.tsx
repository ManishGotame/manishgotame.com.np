import { getBlockTitle } from 'notion-utils'
import Post from './post'
import { notion } from '@/lib'

type tParams = Promise<{ slug: string }>

export const revalidate = 30

export default async function Page({ params }: { params: tParams }) {
  const { slug } = await params
  const data = await notion.getPage(slug as string)

  const keys = Object.keys(data?.block || {})
  const block = data?.block?.[keys[0]]?.value
  const title = getBlockTitle(block, data)

  return <Post blockMap={data} title={title} />
}
