import type { RecommendedLink } from '@/types'
import conf from '@/conf'
import recommendedLinks from '@/static/recommendedLinks'
import AdderInterface from '@/Adders/Adder'
import recommendedLinkTemplate from '@/templates/recommendedLinkTemplate'
import recommendedLinksContainerTemplate from '@/templates/recommendedLinksContainerTemplate'

export default class RecommendedLinksAdder implements AdderInterface {
    private sidebarElem: Element

    public constructor() {
        this.sidebarElem = document.querySelector(conf.selectors.home.rightSidebar)!
    }

    public add(): void {
        if (!this.sidebarElem || window.location.pathname !== '/') {
            return
        }

        const { container, targetForLinks } = recommendedLinksContainerTemplate()

        for (const link of this.getLinks()) {
            targetForLinks.appendChild(link)
        }

        this.sidebarElem.prepend(container)

        // @todo: delete the initial page links
    }

    private getLinks(): HTMLElement[] {
        const linkElements: HTMLElement[] = this.getLinksFromPage()

        linkElements.push(...this.getAdditionalLinks())

        return linkElements
    }

    private getAdditionalLinks(): HTMLElement[] {
        return recommendedLinks.map(link => recommendedLinkTemplate(link))
    }

    private getLinksFromPage(): HTMLElement[] {
        const links: RecommendedLink[] = []

        const elements = this.sidebarElem.querySelectorAll('.inner > .panel')
        const panels = Array.from(elements)

        for (const panel of panels) {
            //
        }


        // @todo: add icons to links

        return links.map(link => recommendedLinkTemplate(link))
    }
}