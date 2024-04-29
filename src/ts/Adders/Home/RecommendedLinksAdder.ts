import conf from '@/conf'
import AdderInterface from '@/Adders/Adder'
import homeSidebarLinkTemplate from '@/templates/homeSidebarLinkTemplate'

export default class RecommendedLinksAdder implements AdderInterface {
    private rightSidebar: Element

    public constructor() {
        this.rightSidebar = document.querySelector(conf.selectors.home.rightSidebar)!
    }

    public add(): void {
        if (!this.rightSidebar || window.location.pathname !== '/') {
            return
        }

        const div = document.createElement('div')

        for (const link of conf.homeLinks) {
            div.appendChild(homeSidebarLinkTemplate(link))
        }

        target.prepend(div)
    }
}