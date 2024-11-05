import type Modifier from '@/Modifiers/Modifier'

export default class CodeSampleModifier implements Modifier {
    public modify(): void {
        window.addEventListener('load', () => {
            document.body.style.opacity = '1'
        })
    }
}
