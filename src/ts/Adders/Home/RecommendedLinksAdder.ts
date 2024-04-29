import type { RecommendedLink } from '@/types'
import conf from '@/conf'
import AdderInterface from '@/Adders/Adder'
import homeSidebarLinkTemplate from '@/templates/homeSidebarLinkTemplate'
import recommendedLinksContainerTemplate from '@/templates/recommendedLinksContainerTemplate'

export default class RecommendedLinksAdder implements AdderInterface {
    private rightSidebarElem: Element
    private linksContainer: Element | null = null
    private targetForLinks: Element | null = null

    public constructor() {
        this.rightSidebarElem = document.querySelector(conf.selectors.home.rightSidebar)!
    }

    public add(): void {
        if (!this.rightSidebarElem || window.location.pathname !== '/') {
            return
        }

        this.insertLinksContainer()

        const links = this.getLinksFromPage()

        // ----------------------------

        const div = document.createElement('div')

        for (const link of conf.homeLinks) {
            div.appendChild(homeSidebarLinkTemplate(link))
        }

        // this.rightSidebar.prepend(div)
    }

    private insertLinksContainer(): void {
        const { container, targetForLinks } = recommendedLinksContainerTemplate()

        this.rightSidebarElem.appendChild(container)

        this.linksContainer = container
        this.targetForLinks = targetForLinks
    }

    private getLinksFromPage(): RecommendedLink[] {
        const links = this.parseLinksFromPage()

        // add icons to links

        // add additional links

        return links
    }

    private parseLinksFromPage(): RecommendedLink[] {
        const links: RecommendedLink[] = []


        return links
    }
}