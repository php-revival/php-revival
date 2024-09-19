import type { HomeLink } from '@/types'
import conf from '@/conf'
import recommendedLinks from '@/static/recommendedLinks'
import socialLinks from '@/static/socialLinks'
import AdderInterface from '@/Adders/Adder'
import homeLinkTemplate from '@/templates/homeLinkTemplate'
import homeLinksSectionTemplate from '@/templates/homeLinksSectionTemplate'
import linksIcons from '@/static/linksIcons'

const DEFAULT_ICON_NAME = 'link-white.png'
const EVENT_LINKS = ['/conferences', '/cal.php']

export default class HomeLinksAdder implements AdderInterface {
    private sidebarElem: Element

    public constructor() {
        this.sidebarElem = document.querySelector(conf.selectors.home.rightSidebar)!
    }

    public add(): void {
        if (!this.sidebarElem || window.location.pathname !== '/') {
            return
        }

        this.addLinksSection(this.getSocialLinks(), 'Social')
        this.addLinksSection(this.getRecommendedLinks(), 'Recommended')
        this.addLinksSection(this.getEventsLinks(), 'Events')

        this.removeInitialLinks()
    }

    private removeInitialLinks(): void {
        const innerElem = this.sidebarElem.querySelector('.inner')

        if (!innerElem) {
            console.warn(
                '[PHP Revival]: Could not find the inner element in the sidebar to remove it',
            )
            return
        }

        innerElem.remove()
    }

    private addLinksSection(links: HTMLElement[], header: string): void {
        const { section, targetForLinks } = homeLinksSectionTemplate(header)

        for (const link of links) {
            targetForLinks.appendChild(link)
        }

        this.sidebarElem.prepend(section)

        this.displayLinks(section)
    }

    private displayLinks(sidebarSection: HTMLElement): void {
        setTimeout(() => (sidebarSection.style.opacity = '1'), 300)
    }

    private getRecommendedLinks(): HTMLElement[] {
        const linkElements = this.getRecommendedLinksFromPage().filter(
            link => !EVENT_LINKS.some(eventLink => link.href.includes(eventLink)),
        )

        const additionalLinks = recommendedLinks.map(link => homeLinkTemplate(link))

        linkElements.push(...additionalLinks)

        return linkElements
    }

    private getEventsLinks(): HTMLElement[] {
        return this.getRecommendedLinksFromPage().filter(link =>
            EVENT_LINKS.some(eventLink => link.href.includes(eventLink)),
        )
    }

    private getSocialLinks(): HTMLElement[] {
        const linkElements: HTMLElement[] = this.getSocialLinksFromPage()

        const additionalLinks = socialLinks.map(link => homeLinkTemplate(link))

        linkElements.push(...additionalLinks)

        return linkElements
    }

    private getRecommendedLinksFromPage(): HTMLAnchorElement[] {
        const links: HomeLink[] = []

        const elements = this.sidebarElem.querySelectorAll('.inner > .panel')
        const panels = Array.from(elements)

        for (const panel of panels) {
            if (this.childrenHaveLinks(panel.children)) {
                const link = this.getLinkFromChildren(panel.children)

                if (link) {
                    links.push(link)
                }
            }
        }

        return links.map(link => homeLinkTemplate(link))
    }

    private getSocialLinksFromPage(): HTMLElement[] {
        const links: HomeLink[] = []

        const selector = '.inner > .social-media ul li a'
        const elements = this.sidebarElem.querySelectorAll(selector)

        const anchorTags = Array.from(elements)

        for (const anchor of anchorTags) {
            if (anchor.tagName !== 'A') {
                const msg = `[PHP Revival]: Expected an anchor tag, got ${anchor.tagName}`
                console.warn(msg)
                continue
            }

            const element = anchor as HTMLAnchorElement
            const title = element.innerText!.trim()

            links.push({
                title,
                href: element.href,
                iconName: this.getIconName(title),
            })
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
