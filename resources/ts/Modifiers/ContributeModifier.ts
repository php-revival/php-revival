import type Modifier from '@/Modifiers/Modifier'
import conf from '@/conf'

export default class ContributeModifier implements Modifier {
    private modal: HTMLElement | null
    private linksSection: HTMLElement | null

    public constructor() {
        this.modal = document.querySelector<HTMLElement>(conf.selectors.contributeModal)
        this.linksSection = document.querySelector<HTMLElement>(conf.selectors.contributeModalLinks)
    }

    public modify(): void {
        if (!this.modal || !this.linksSection) {
            return
        }

        this.removeDotsFromLinks()
        this.addDescription()
    }

    private addDescription(): void {
        this.linksSection!.insertAdjacentHTML(
            'afterbegin',
            '<p>You can help PHP community by submitting a pull request or report a bug</p>',
        )
    }

    private removeDotsFromLinks(): void {
        this.linksSection!.innerHTML = this.linksSection!.innerHTML.replace(/•/g, '')
    }
}