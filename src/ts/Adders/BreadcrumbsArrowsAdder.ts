import type Adder from '@/Adders/Adder'
import conf from '@/conf'
import { warn } from '@/modules/err'

/**
 * Moves the breadcrumbs arrow links from the top to the bottom of the page
 */
export default class BreadcrumbsArrowsAdder implements Adder {
    private readonly oldNextLink: HTMLElement
    private readonly oldPrevLink: HTMLElement
    private readonly linksTarget: HTMLElement
    private nextLink: string = ''
    private prevLink: string = ''
    private nextTitle: string = ''
    private prevTitle: string = ''

    public constructor() {
        this.oldNextLink = document.querySelector(conf.selectors.bread.next)!
        this.oldPrevLink = document.querySelector(conf.selectors.bread.prev)!
        this.linksTarget = document.querySelector(conf.selectors.docs.layoutContent)!
    }

    public add(): void {
        if (!this.oldNextLink || !this.oldPrevLink || !this.linksTarget) {
            return
        }

        this.nextTitle = this.getTitle(this.oldNextLink)
        this.prevTitle = this.getTitle(this.oldPrevLink)
        this.nextLink = this.getLink(this.oldNextLink)
        this.prevLink = this.getLink(this.oldPrevLink)

        this.removeOldArrows()
        this.insertNewArrows()
    }

    private removeOldArrows(): void {
        this.oldNextLink.remove()
        this.oldPrevLink.remove()
    }

    private getTitle(elem: HTMLElement): string {
        return elem.innerText.replace('« ', '').replace(' »', '').trim()
    }

    private getLink(elem: HTMLElement): string {
        const anchor = elem.querySelector<HTMLAnchorElement>('a')

        if (!anchor) {
            warn('Anchor not found in breadcrumbs arrow link')
            return '#'
        }

        return anchor.getAttribute('href')!
    }

    private insertNewArrows(): void {
        const rightLink = this.createArrowLink(
            this.nextTitle,
            this.nextLink,
            'right',
        )
        const leftLink = this.createArrowLink(this.prevTitle, this.prevLink, 'left')
        const container = this.createLinksContainer()

        container.appendChild(leftLink)
        container.appendChild(rightLink)

        this.linksTarget.appendChild(container)
    }

    private createLinksContainer(): HTMLElement {
        const container = document.createElement('div')
        container.className = 'php-revival-arrow-links'

        return container
    }

    private createArrowLink(
        title: string,
        link: string,
        direction: 'left' | 'right',
    ): HTMLElement {
        const a = document.createElement('a')

        a.href = link
        a.innerText = title
        a.className = `php-revival-${direction}-arrow-link`

        return a
    }
}
