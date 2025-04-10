import { getBlockTitle } from 'notion-utils'
import Post from './post'
import { notion } from '@/lib'

export default async function Page({ params }: { params: { slug: string } }) {
  const { slug } = params
  const data = await notion.getPage(slug as string)

  const keys = Object.keys(data?.block || {})
  const block = data?.block?.[keys[0]]?.value
  const title = getBlockTitle(block, data)

  return <Post blockMap={data} title={title} />
}
