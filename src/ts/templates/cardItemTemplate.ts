import type { RecommendedVideo } from '@/types'
import getImageUrl from '@/modules/getImageUrl'

export default (card: RecommendedVideo): Element => {
    const a = document.createElement('a')
    a.href = card.link
    a.target = '_blank'
    a.classList.add('revival-recommended-video')

    const src = getImageUrl(`recommended-videos/${card.img}`)

    a.appendChild(createImage(src, card.title))
    a.appendChild(createSpan(card.title))

    return a
}

function createImage(src: string, alt: string): HTMLImageElement {
    const img = document.createElement('img')
    img.src = src
    img.alt = alt

    return img
}

function createSpan(text: string): HTMLSpanElement {
    const span = document.createElement('span')
    span.textContent = text

    return span
}