import { NotionAPI } from 'notion-client'
import { BlockMap } from 'notion-types'

import { ListLayout, MenuButton } from '@/components'
import { useState } from 'react'

export async function getStaticProps() {
  const notion = new NotionAPI()
  const recordMap = await notion.getPage(process.env.NOTION_PAGE_ID as string)

  return {
    props: {
      blockMap: recordMap.block
    }
  }
}

export default function Writing() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <MenuButton onClick={() => setOpen(!open)} />
    </>
  )
}

Writing.displayName = 'Writing'

type PageProps = {
  blockMap: BlockMap
  open: boolean
}

Writing.getLayout = function getLayout(page: React.ReactElement<PageProps>) {
  return (
    <ListLayout title='Writing' blockMap={page.props.blockMap}>
      {page}
    </ListLayout>
  )
}
