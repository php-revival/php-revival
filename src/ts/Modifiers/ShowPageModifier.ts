import type Modifier from '@/Modifiers/Modifier'

export default class CodeSampleModifier implements Modifier {
    public modify(): void {
        const state = document.readyState

        if (state === 'complete' || state === 'interactive') {
            this.displayPage()
            return
        }

        addEventListener('load', () => this.displayPage)
        setTimeout(() => this.displayPage, 0)
    }

    private displayPage(): void {
        document.body.style.opacity = '1'
    }
}
