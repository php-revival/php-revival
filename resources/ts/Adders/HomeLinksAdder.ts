import conf from '@/conf'
import AdderInterface from '@/Adders/Adder'
import homeSidebarLinkTemplate from '@/templates/homeSidebarLinkTemplate'

export default class implements AdderInterface {
    public add(): void {
        const target = document.querySelector(conf.selectors.home.targetForHomeLinks)

        if (window.location.pathname !== '/' || !target) {
            return
        }

        let linksHtml = ''

        conf.homeLinks.forEach(link => linksHtml += homeSidebarLinkTemplate(link))

        target.insertAdjacentHTML('afterend', linksHtml)
    }
}