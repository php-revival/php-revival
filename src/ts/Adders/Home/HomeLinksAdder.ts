import type { HomeLink } from '@/types'
import conf from '@/conf'
import recommendedLinks from '@/static/recommendedLinks'
import AdderInterface from '@/Adders/Adder'
import homeLinkTemplate from '@/templates/homeLinkTemplate'
import homeLinksContainerTemplate from '@/templates/homeLinksContainerTemplate'
import linksIcons from '@/static/linksIcons'

const DEFAULT_ICON_NAME = 'link-white.png'

export default class HomeLinksAdder implements AdderInterface {
    private sidebarElem: Element

    public constructor() {
        this.sidebarElem = document.querySelector(conf.selectors.home.rightSidebar)!
    }

    public add(): void {
        if (!this.sidebarElem || window.location.pathname !== '/') {
            return
        }

        this.addRecommendedLinksSection()
        this.addSocialLinksSection()

        // @todo: delete the initial page links
    }

    private addRecommendedLinksSection(): void {
        const { container, targetForLinks } = homeLinksContainerTemplate('Recommended links')

        for (const link of this.getRecommendedLinks()) {
            targetForLinks.appendChild(link)
        }

        this.sidebarElem.prepend(container)

        this.displayLinks(container)
    }

    private addSocialLinksSection(): void {
        // @todo: add social links
        // @todo: parse social links from the page
        // @todo: add additional social links
    }

    private displayLinks(container: HTMLElement): void {
        setTimeout(() => container.style.opacity = '1', 300)
    }

    private getRecommendedLinks(): HTMLElement[] {
        const linkElements: HTMLElement[] = this.getRecommendedLinksFromPage()

        const additionalLinks = recommendedLinks.map(link => homeLinkTemplate(link))

        linkElements.push(...additionalLinks)

        return linkElements
    }

    private getRecommendedLinksFromPage(): HTMLElement[] {
        const links: HomeLink[] = []

        const elements = this.sidebarElem.querySelectorAll('.inner > .panel')
        const panels = Array.from(elements)

        for (const panel of panels) {
            if (this.childrenHaveLinks(panel.children)) {
                const link = this.getLinkFromChildren(panel.children)

                if (link) {
                    links.push(link)
                }

                continue
            }
        }

        return links.map(link => homeLinkTemplate(link))
    }

    private childrenHaveLinks(children: HTMLCollection): boolean {
        for (const child of children) {
            if (child.tagName === 'A') {
                return true
            }
        }

        return false
    }

    private getLinkFromChildren(children: HTMLCollection): HomeLink | null {
        for (const child of children) {
            if (child.tagName !== 'A') {
                continue
            }

            const element = child as HTMLAnchorElement
            const title = element.textContent!

            return {
                title,
                href: element.href,
                iconName: this.getIconName(title),
            }
        }

        console.error('[PHP Revival]: No link found in the children of the panel')

        return null
    }

    private getIconName(title: string): string {
        for (const icon of linksIcons) {
            if (icon.linkTitle === title) {
                return icon.iconName
            }
        }

        return DEFAULT_ICON_NAME
    }
}