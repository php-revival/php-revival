import type { Modifier } from '@/types'
import commentIcon from '@/templates/icons/commentIcon'

export default class ToggleCommentsModifier implements Modifier {
    private readonly commentsSection: HTMLElement
    private readonly layout: HTMLElement

    public constructor() {
        this.layout = document.querySelector<HTMLElement>('#layout-content')!
        this.commentsSection = document.querySelector<HTMLElement>('#usernotes')!
    }

    public modify(): void {
        const onDocsPage = document.body.classList.contains('docs')

        if (!this.commentsSection || !this.layout || !onDocsPage) {
            return
        }

        this.toggleComments(false)

        const btn = this.createShowCommentsButton()

        this.layout.appendChild(btn)
    }

    private toggleComments(show: boolean): void {
        this.commentsSection.style.display = show ? 'block' : 'none'
    }

    private createShowCommentsButton(): HTMLElement {
        const div = document.createElement('div')
        div.className = 'phpr-show-comments'

        const btn = document.createElement('button')
        btn.innerHTML = `${commentIcon} Show Comments`

        btn.addEventListener('click', () => {
            btn.remove()
            this.toggleComments(true)
        })

        div.appendChild(btn)

        return div
    }
}
