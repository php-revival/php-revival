import type { Modifier } from '@/types'
import conf from '@/conf'

export default class HomeHeroModifier implements Modifier {
    private logoElem: HTMLImageElement | null = null
    private textElem: HTMLParagraphElement | null = null
    private buttonsElem: HTMLDivElement | null = null

    modify(): void {
        const hero = document.querySelector<HTMLDivElement>(conf.selectors.home.hero)

        if (!hero) {
            return
        }

        this.logoElem = hero.querySelector<HTMLImageElement>('.hero__logo')
        this.textElem = hero.querySelector<HTMLParagraphElement>('.hero__text')
        this.buttonsElem = hero.querySelector<HTMLDivElement>('.hero__actions')

        this.wrapInRow(hero)
        this.wrapTextAndButtons()

        hero.style.opacity = '1'
    }

    private wrapInRow(hero: HTMLDivElement): void {
        if (!this.logoElem || !this.textElem || !this.buttonsElem) {
            return
        }

        const heroRow = document.createElement('div')
        heroRow.className = 'phpr-hero-row'

        heroRow.appendChild(this.logoElem)
        heroRow.appendChild(this.textElem)
        heroRow.appendChild(this.buttonsElem)

        hero.prepend(heroRow)
    }

    private wrapTextAndButtons(): void {
        if (!this.logoElem || !this.textElem || !this.buttonsElem) {
            return
        }

        const row = document.querySelector<HTMLDivElement>('.phpr-hero-row')!

        const heroTextAndButtons = document.createElement('div')
        heroTextAndButtons.className = 'phpr-hero-row__text-and-buttons'

        heroTextAndButtons.appendChild(this.textElem)
        heroTextAndButtons.appendChild(this.buttonsElem)

        row.appendChild(heroTextAndButtons)
    }
}
