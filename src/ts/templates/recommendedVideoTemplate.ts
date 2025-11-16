import type { RecommendedVideo } from '@/types'
import getImageUrl from '@/modules/getImageUrl'
import moment from 'moment'

export default (video: RecommendedVideo): Element => {
    const a = document.createElement('a')
    a.href = video.link
    a.target = '_blank'
    a.className = 'phpr-recommended-videos-section__video'

    const src = getImageUrl(`recommended-videos/${video.img}`)

    a.appendChild(createImage(src, video.title))
    a.appendChild(createSpan(video.title))
    a.appendChild(createDateElement(video.date))

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

function createDateElement(date: string): HTMLElement {
    const small = document.createElement('small')
    small.textContent = moment(date).format('ll')

    return small
}
