import type { HomeLink } from '@/types'
import getImageUrl from '@/modules/getImageUrl'

export default (link: HomeLink): HTMLDivElement => {
    const src = getImageUrl(`icons/${link.iconName}`)
    const img = createImage(src)
    const span = createSpan(link.title)

    return createLink(img, span, link)
}

function createImage(src: string): HTMLImageElement {
    const img = document.createElement('img')
    img.src = src

    return img
}

function createSpan(title: string): HTMLSpanElement {
    const span = document.createElement('span')
    span.textContent = title

    return span
}

function createLink(img: Element, span: Element, link: HomeLink): HTMLDivElement {
    const a = document.createElement('a')

    a.href = link.href
    a.target = '_blank'
    a.className = 'php-revival-home-links-section__link'

    a.appendChild(img)
    a.appendChild(span)

    const div = document.createElement('div')

    div.dataset.url = link.href
    div.appendChild(a)

    if (link.nestedList) {
        div.appendChild(link.nestedList)
    }

    return div
}
