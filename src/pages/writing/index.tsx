import 'react-notion/src/styles.css'
import 'prismjs/themes/prism-tomorrow.css'

import { BlockMapType } from 'react-notion'
import { ListLayout } from '@/components'
import { AppProps } from 'next/app'

export async function getStaticProps() {
  const data = await fetch(
    `https://notion-api.splitbee.io/v1/page/${process.env.NOTION_PAGE_ID}`
  ).then((res) => res.json())

  return {
    props: {
      blockMap: data
    }
  }
}

export default function Writing({ blockMap }: { blockMap: BlockMapType }) {
  return <>Page here</>
}

Writing.displayName = 'Writing'

Writing.getLayout = function getLayout(page: AppProps) {
  return (
    <ListLayout title='Writing' blockMap={page.props.blockMap}>
      {page}
    </ListLayout>
  )
}
