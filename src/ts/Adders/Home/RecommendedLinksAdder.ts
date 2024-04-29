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

        this.getLinks().forEach(link => targetForLinks.appendChild(link))

        this.rightSidebarElem.prepend(container)
    }

    private getLinks(): HTMLElement[] {
        const linkElements: HTMLElement[] = this.parseLinksFromPage()

        // add icons to links

        // add additional links

        return linkElements
    }

    private parseLinksFromPage(): HTMLElement[] {
        const links: RecommendedLink[] = []


        return links.map(link => homeSidebarLinkTemplate(link))
    }
}