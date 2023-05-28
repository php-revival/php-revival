import type Modifier from '@/Modifiers/Modifier'
import conf from '@/conf'

export default class implements Modifier {
    public modify(): void {
        const logo = document.querySelector<HTMLImageElement>(conf.selectors.homeLogo)

        if (!logo) {
            return
        }

        logo.src = conf.urls.server + 'images/logo.webp'
        logo.style.opacity = '1'
    }
}