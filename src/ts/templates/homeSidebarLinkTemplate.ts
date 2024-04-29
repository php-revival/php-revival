import type { RecommendedLink } from '@/types'
import getImageUrl from '@/modules/getImageUrl'

export default (link: RecommendedLink): HTMLElement => {
    const src = getImageUrl(`icons/${link.iconName}`)

    const img = createImage(src)
    const span = createSpan(link.title)
    const a = createAnchor(img, span, link.link)

    return createParagraph(a)
}

function createParagraph(a: Element): HTMLParagraphElement {
    const p = document.createElement('p')
    p.classList.add('panel', 'php-revival-panel')
    p.appendChild(a)

    return p
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

    a.appendChild(img)
    a.appendChild(span)

    return a
}