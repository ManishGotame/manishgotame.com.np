import { ITitleResponse } from '@/interfaces'
import { BlockMapType } from 'react-notion'

export const getTitles = (data: BlockMapType) => {
  const titles: ITitleResponse[] = Object.values(data)
    .filter(
      (each) =>
        each.value.type === 'page' &&
        !!each.value.properties &&
        !!each.value.properties.title
    )
    .map((each) => ({
      title: each.value.properties.title[0][0],
      id: each.value.id
    }))
  // remove first two titles as they are title and folder names
  return titles.splice(2).reverse()
}
