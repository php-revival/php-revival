import type Modifier from '@/Modifiers/Modifier'
import contributeModalButtonTemplate from '@/templates/contributeModalButtonTemplate'
import conf from '@/conf'

export default class ContributeModifier implements Modifier {
    private modal: HTMLElement | null
    private linksSection: HTMLElement | null

    public constructor() {
        this.modal = document.querySelector<HTMLElement>(conf.selectors.docs.contributeModal)
        this.linksSection = document.querySelector<HTMLElement>(conf.selectors.docs.contributeModalLinks)
    }

    public modify(): void {
        if (!this.modal || !this.linksSection) {
            return
        }

        this.addOpenModalButton()
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

    private addOpenModalButton(): void {
        const elem = document.querySelector<HTMLElement>('body.docs')

        if (!elem) {
            return
        }

        elem.insertAdjacentHTML('afterbegin', contributeModalButtonTemplate)
    }
}