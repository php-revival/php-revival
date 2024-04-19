import type { HomeLink } from '@/types'
import getImageUrl from '@/modules/getImageUrl'

export default (link: HomeLink): Element => {
    const src = getImageUrl(`icons/${link.iconName}`)

    const img = createImage(src)
    const span = createSpan(link.title)
    const a = createLink(img, span, link.link)

    return createParagraph(a)
}

function createParagraph(a: Element): Element {
    const p = document.createElement('p')
    p.classList.add('panel', 'php-revival-panel')
    p.appendChild(a)

    return p
}

function createImage(src: string): Element {
    const img = document.createElement('img')
    img.src = src

    return img
}

function createSpan(title: string): Element {
    const span = document.createElement('span')
    span.textContent = title

    return span
}

function createLink(img: Element, span: Element, href: string): Element {
    const a = document.createElement('a')
    a.href = href
    a.target = '_blank'

    a.appendChild(img)
    a.appendChild(span)

    return a
}