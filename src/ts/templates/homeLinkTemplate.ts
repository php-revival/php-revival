import type { HomeLink } from '@/types'
import getImageUrl from '@/modules/getImageUrl'

export default (link: HomeLink): HTMLAnchorElement => {
    const src = getImageUrl(`icons/${link.iconName}`)
    const img = createImage(src)
    const span = createSpan(link.title)

    return createAnchor(img, span, link.href)
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

function createAnchor(img: Element, span: Element, href: string): HTMLAnchorElement {
    const a = document.createElement('a')

    a.href = href
    a.target = '_blank'
    a.className = 'php-revival-home-links-section__link'

    a.appendChild(img)
    a.appendChild(span)

    return a
}
