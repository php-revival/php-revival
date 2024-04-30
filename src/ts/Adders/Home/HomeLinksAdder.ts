import type { HomeLink } from '@/types'
import conf from '@/conf'
import recommendedLinks from '@/static/recommendedLinks'
import socialLinks from '@/static/socialLinks'
import AdderInterface from '@/Adders/Adder'
import homeLinkTemplate from '@/templates/homeLinkTemplate'
import homeLinksSectionTemplate from '@/templates/homeLinksSectionTemplate'
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

        this.addLinksSection(this.getRecommendedLinks(), 'Recommended Links')
        this.addLinksSection(this.getSocialLinks(), 'Social Links')

        this.removeInitialLinks()
    }

    private removeInitialLinks(): void {
        const innerElem = this.sidebarElem.querySelector('.inner')

        if (!innerElem) {
            console.warn('[PHP Revival]: Could not find the inner element in the sidebar to remove it')
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
        setTimeout(() => sidebarSection.style.opacity = '1', 300)
    }

    private getRecommendedLinks(): HTMLElement[] {
        const linkElements: HTMLElement[] = this.getRecommendedLinksFromPage()

        const additionalLinks = recommendedLinks.map(link => homeLinkTemplate(link))

        linkElements.push(...additionalLinks)

        return linkElements
    }

    private getSocialLinks(): HTMLElement[] {
        const linkElements: HTMLElement[] = this.getSocialLinksFromPage()

        const additionalLinks = socialLinks.map(link => homeLinkTemplate(link))

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

    private getSocialLinksFromPage(): HTMLElement[] {
        const links: HomeLink[] = []

        const elements = this.sidebarElem.querySelectorAll('.inner > .social-media ul li a')
        const anchorTags = Array.from(elements)

        for (const anchor of anchorTags) {
            if (anchor.tagName !== 'A') {
                console.warn(`[PHP Revival]: Expected an anchor tag, got ${anchor.tagName}`)
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