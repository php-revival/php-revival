import type { Modifier } from '@/types'
import conf from '@/conf'
import closeIcon from '@/templates/icons/closeIcon'

const SHOW_MODAL_CLASS = 'contribute--show'

export default class ContributeModifier implements Modifier {
    private modal: HTMLElement | null
    private linksSection: HTMLElement | null

    public constructor() {
        this.modal = document.querySelector<HTMLElement>(
            conf.selectors.docs.contributeModal,
        )
        this.linksSection = document.querySelector<HTMLElement>(
            conf.selectors.docs.contributeModalLinks,
        )
    }

    public modify(): void {
        if (!this.modal || !this.linksSection) {
            return
        }

        this.addOpenModalButton()
        this.removeDotsFromLinks()
        this.addDescription()
        this.insertCloseIconIntoModal()
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

        const btn = this.createButtonElement()

        this.listenForOpenModal(btn)
        this.closeOnEscapeKey()

        elem.appendChild(btn)
    }

    private insertCloseIconIntoModal(): void {
        const btn = this.createCloseIconButton()

        this.listenForCloseModal(btn)

        this.modal!.appendChild(btn)
    }

    private createCloseIconButton(): Element {
        const button = document.createElement('button')

        button.type = 'button'
        button.id = 'phpr-close-button'
        button.className = 'contribute__close-btn'
        button.innerHTML = closeIcon

        return button
    }

    private listenForOpenModal(btn: Element): void {
        btn.addEventListener('click', () => {
            this.modal!.classList.toggle(SHOW_MODAL_CLASS)
        })
    }

    private closeOnEscapeKey(): void {
        document.addEventListener('keydown', e => {
            if (e.key === 'Escape') {
                this.modal!.classList.remove(SHOW_MODAL_CLASS)
            }
        })
    }

    private listenForCloseModal(btn: Element): void {
        btn.addEventListener('click', () => {
            this.modal!.classList.remove(SHOW_MODAL_CLASS)
        })
    }

    private createButtonElement(): Element {
        const button = document.createElement('button')

        button.type = 'button'
        button.id = 'phpr-contribute-button'
        button.className = 'phpr-contribute-button'
        button.textContent = 'Contribute'

        return button
    }
}
