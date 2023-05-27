import type Modifier from '@/classes/Modifiers/Modifier'

export default class implements Modifier {
    public modify(): void {
        const logo = document.querySelector<HTMLImageElement>('img.hero-logo')

        if (!logo)
            return

        logo.src = 'https://serhiicho.github.io/php-revival-api/images/logo.webp'
        logo.style.opacity = '1'
    }
}