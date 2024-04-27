import type Modifier from '@/Modifiers/Modifier'
import getImageUrl from '@/modules/getImageUrl'
import conf from '@/conf'

export default class LogoModifier implements Modifier {
    public modify(): void {
        const logo = document.querySelector<HTMLImageElement>(conf.selectors.home.logo)

        if (!logo) {
            return
        }

        logo.src = getImageUrl('logo.webp')
    }
}