import { ITitleResponse } from '@/interfaces'
import { BlockMap } from 'notion-types'

export const getTitles = (data: BlockMap) => {
  console.log(data)
  const titles: ITitleResponse[] = Object.values(data)
    .filter(
      (each) =>
        each.value.type === 'page' &&
        !!each.value.properties &&
        !!each.value.properties &&
        !!each.value.properties.title
    )
    .sort((a, b) => {
      return (
        new Date(a.value.created_time).getTime() -
        new Date(b.value.created_time).getTime()
      )
    })
    .map((each) => ({
      title: each.value.properties.title[0][0],
      id: each.value.id,
      created_at: each.value.created_time,
      updated_at: each.value.last_edited_time
    }))
  // remove first title as it is a folder name
  return titles.splice(1).reverse()
}
