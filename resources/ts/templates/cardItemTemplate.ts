import type { RandomVideo } from '@/types'
import getImageUrl from '@/modules/getImageUrl'

export default (card: RandomVideo): string => {
    const src = getImageUrl(`random-videos/${card.img}`)

    return `
        <a href="${card.link}" class="revival-random-video" target="_blank">
            <img src="${src}" alt="${card.title}">
            <span>${card.title}</span>
        </a>
    `
}