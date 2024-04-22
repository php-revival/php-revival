import type Modifier from '@/Modifiers/Modifier'
import commentIcon from '@/templates/icons/commentIcon'

export default class ToggleCommentsModifier implements Modifier {
    private readonly commentsSection: HTMLElement
    private readonly layout: HTMLElement

    public constructor() {
        this.layout = document.querySelector<HTMLElement>('#layout-content')!
        this.commentsSection = document.querySelector<HTMLElement>('#usernotes')!
    }

    public modify(): void {
        if (!this.commentsSection || !this.layout) {
            return
        }

        this.goggleComments(false)

        const btn = this.createShowCommentsButton()

        this.layout.appendChild(btn)
    }

    private goggleComments(show: boolean): void {
        this.commentsSection.style.display = show ? 'block' : 'none'
    }

    private createShowCommentsButton(): HTMLElement {
        const div = document.createElement('div')
        div.classList.add('php-revival-show-comments')

        const btn = document.createElement('button')
        btn.innerHTML = `${commentIcon} Show Comments`

        btn.addEventListener('click', () => {
            btn.remove()
            this.goggleComments(true)
        })

        div.appendChild(btn)

        return div
    }
}