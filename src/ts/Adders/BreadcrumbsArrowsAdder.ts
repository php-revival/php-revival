import type Adder from '@/Adders/Adder'
import conf from '@/conf'

/**
 * Moves the breadcrumbs arrow links from the top to the bottom of the page
 */
export default class BreadcrumbsArrowsAdder implements Adder {
    private readonly oldNextLink: HTMLElement
    private readonly oldPrevLink: HTMLElement
    private nextLink: string = ''
    private prevLink: string = ''
    private nextTitle: string = ''
    private prevTitle: string = ''

    public constructor() {
        this.oldNextLink = document.querySelector(conf.selectors.bread.next)!
        this.oldPrevLink = document.querySelector(conf.selectors.bread.prev)!
    }

    public add(): void {
        if (!this.oldNextLink || !this.oldPrevLink) {
            console.warn('[PHP Revival]: BreadcrumbsArrowsAdder: next or prev link not found')
            return
        }

        this.nextTitle = this.getTitle(this.oldNextLink)
        this.prevTitle = this.getTitle(this.oldPrevLink)
        this.nextLink = this.getLink(this.oldNextLink)
        this.prevLink = this.getLink(this.oldPrevLink)

        this.removeOldArrows()

        console.log({
            nextTitle: this.nextTitle,
            prevTitle: this.prevTitle,
            nextLink: this.nextLink,
            prevLink: this.prevLink,
        })
    }

    private removeOldArrows(): void {
        this.oldNextLink.remove()
        this.oldPrevLink.remove()
    }

    private getTitle(elem: HTMLElement): string {
        return elem.innerText
            .replace('« ', '')
            .replace(' »', '')
    }

    private getLink(elem: HTMLElement): string {
        const anchor = elem.querySelector<HTMLAnchorElement>('a')

        if (!anchor) {
            console.warn('[PHP Revival]: BreadcrumbsArrowsAdder: anchor not found in breadcrumbs arrow link')
            return '#'
        }

        return anchor.getAttribute('href')!
    }
}