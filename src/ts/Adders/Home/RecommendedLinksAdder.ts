import type { RecommendedLink } from '@/types'
import conf from '@/conf'
import recommendedLinks from '@/static/recommendedLinks'
import AdderInterface from '@/Adders/Adder'
import recommendedLinkTemplate from '@/templates/recommendedLinkTemplate'
import recommendedLinksContainerTemplate from '@/templates/recommendedLinksContainerTemplate'

const DEFAULT_ICON_NAME = 'link-white.png'

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

        this.displayLinks(container)

        // @todo: delete the initial page links
    }

    private displayLinks(container: HTMLElement): void {
        setTimeout(() => {
            container.style.opacity = '1'
        }, 300)
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

        console.log(panels)
        for (const panel of panels) {
            if (this.childrenHaveLinks(panel.children)) {
                const link = this.getLinkFromChildren(panel.children)

                if (link) {
                    links.push(link)
                }

                continue
            }

            // con
        }


        // @todo: add icons to links

        return links.map(link => recommendedLinkTemplate(link))
    }

    private childrenHaveLinks(children: HTMLCollection): boolean {
        for (const child of children) {
            if (child.tagName === 'A') {
                return true
            }
        }

        return false
    }

    private getLinkFromChildren(children: HTMLCollection): RecommendedLink | null {
        for (const child of children) {
            if (child.tagName !== 'A') {
                continue
            }

            const element = child as HTMLAnchorElement

            return {
                title: element.textContent!,
                href: element.href,
                iconName: DEFAULT_ICON_NAME,
            }
        }

        console.error('[PHP Revival]: No link found in the children of the panel')

        return null
    }
}