import type { RecommendedVideo } from '@/types'
import getImageUrl from '@/modules/getImageUrl'

export default (card: RecommendedVideo): string => {
    const src = getImageUrl(`recommended-videos/${card.img}`)

    return `
        <a href="${card.link}" class="revival-recommended-video" target="_blank">
            <img src="${src}" alt="${card.title}">
            <span>${card.title}</span>
        </a>
    `
}