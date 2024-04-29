import conf from '@/conf'
import AdderInterface from '@/Adders/Adder'
import homeSidebarLinkTemplate from '@/templates/homeSidebarLinkTemplate'

export default class HomeLinksAdder implements AdderInterface {
    public add(): void {
        const target = document.querySelector(conf.selectors.home.rightSidebar)

        if (window.location.pathname !== '/' || !target) {
            return
        }

        const div = document.createElement('div')

        for (const link of conf.homeLinks) {
            div.appendChild(homeSidebarLinkTemplate(link))
        }

        target.insertAdjacentElement('afterend', div)
    }
}