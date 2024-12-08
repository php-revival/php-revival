import type { Modifier } from '@/types'
import conf from '@/conf'

export default class HomeHeroModifier implements Modifier {
    private elements?: {
        logo: HTMLImageElement
        text: HTMLParagraphElement
        buttons: HTMLDivElement
    }

    public modify(): void {
        const hero = document.querySelector<HTMLDivElement>(conf.selectors.home.hero)

        if (!hero) {
            return
        }

        this.elements = {
            logo: hero.querySelector<HTMLImageElement>('.hero__logo')!,
            text: hero.querySelector<HTMLParagraphElement>('.hero__text')!,
            buttons: hero.querySelector<HTMLDivElement>('.hero__actions')!,
        }

        this.wrapInRow(hero)
        this.wrapTextAndButtons()

        hero.style.opacity = '1'
    }

    private wrapInRow(hero: HTMLDivElement): void {
        if (!this.elements) {
            return
        }

        const heroRow = document.createElement('div')
        heroRow.className = 'php-revival-hero-row'

        heroRow.appendChild(this.elements.logo)
        heroRow.appendChild(this.elements.text)
        heroRow.appendChild(this.elements.buttons)

        hero.prepend(heroRow)
    }

    private wrapTextAndButtons(): void {
        if (!this.elements) {
            return
        }

        const row = document.querySelector<HTMLDivElement>('.php-revival-hero-row')!

        const heroTextAndButtons = document.createElement('div')
        heroTextAndButtons.className = 'php-revival-hero-row__text-and-buttons'

        heroTextAndButtons.appendChild(this.elements.text)
        heroTextAndButtons.appendChild(this.elements.buttons)

        row.appendChild(heroTextAndButtons)
    }
}
