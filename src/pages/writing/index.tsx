import 'react-notion/src/styles.css'
import 'prismjs/themes/prism-tomorrow.css'

import { BlockMapType } from 'react-notion'
import { ListLayout } from '@/components'
import 'react-notion-x/src/styles.css'

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

export default function Writing() {
  return <>Page here</>
}

Writing.displayName = 'Writing'

type PageProps = {
  blockMap: BlockMapType
}

Writing.getLayout = function getLayout(page: React.ReactElement<PageProps>) {
  return (
    <ListLayout title='Writing' blockMap={page.props.blockMap}>
      {page}
    </ListLayout>
  )
}
