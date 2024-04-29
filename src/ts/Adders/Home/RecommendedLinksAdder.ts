import type { RecommendedLink } from '@/types'
import conf from '@/conf'
import recommendedLinks from '@/static/recommendedLinks'
import AdderInterface from '@/Adders/Adder'
import homeSidebarLinkTemplate from '@/templates/homeSidebarLinkTemplate'
import recommendedLinksContainerTemplate from '@/templates/recommendedLinksContainerTemplate'

export default class RecommendedLinksAdder implements AdderInterface {
    private rightSidebarElem: Element

    public constructor() {
        this.rightSidebarElem = document.querySelector(conf.selectors.home.rightSidebar)!
    }

    public add(): void {
        if (!this.rightSidebarElem || window.location.pathname !== '/') {
            return
        }

        const { container, targetForLinks } = recommendedLinksContainerTemplate()

        for (const link of this.getLinks()) {
            targetForLinks.appendChild(link)
        }

        this.rightSidebarElem.prepend(container)
    }

    private getLinks(): HTMLElement[] {
        const linkElements: HTMLElement[] = this.getLinksFromPage()

        linkElements.push(...this.getAdditionalLinks())

        return linkElements
    }

    private getAdditionalLinks(): HTMLElement[] {
        return recommendedLinks.map(link => homeSidebarLinkTemplate(link))
    }

    private getLinksFromPage(): HTMLElement[] {
        const links: RecommendedLink[] = []

        // add icons to links
        // here ------------

        return links.map(link => homeSidebarLinkTemplate(link))
    }
}