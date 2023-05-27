import type { CardItem } from '@/types'
import cardItemTemplate from '@/templates/cardItemTemplate'
import randomVideos from '@/storage/randomVideos'
import Adder from '@/classes/Adders/Adder'
import conf from '@/conf'

export default class implements Adder {
    private restOfTheCards: CardItem[] = []

    public constructor() { }

    public injectContent(): void {
        const target = document.querySelector<HTMLDivElement>(conf.selectors.targetForRandVideos)

        if (!target || window.location.pathname !== '/')
            return

        const cards = this.shuffle(randomVideos)
        const takenCards = this.getOnlySomeCards(cards, 3)

        this.restOfTheCards = this.excludeCardsFromTheRest(cards, takenCards)

        this.insertCardsIntoDOM('afterend', takenCards, target, 'wrap')

        setTimeout(() => {
            this.insertMoreVideosAfterClick()
            const container = document.querySelector('.revival-random-video-container') as HTMLDivElement

            if (container)
                container.style.opacity = '1'
        }, 500)
    }

    private insertMoreVideosAfterClick(): void {
        const button = document.getElementById('revival-show-more-random') as HTMLButtonElement

        button.addEventListener('click', () => {
            const takenCards = this.getOnlySomeCards(this.shuffle(this.restOfTheCards!), 10)

            this.restOfTheCards = this.excludeCardsFromTheRest(this.restOfTheCards, takenCards)
            this.insertCardsIntoDOM('beforebegin', takenCards, button, 'no-wrap')

            if (this.restOfTheCards.length === 0) button.remove()
        })
    }

    private insertCardsIntoDOM(where: InsertPosition, cards: CardItem[], element: HTMLElement, withWrap: 'wrap' | 'no-wrap'): void {

        let html = withWrap === 'wrap' ? '<div class="revival-random-video-container">' : ''
        cards.forEach(card => html += cardItemTemplate(card))
        html += withWrap === 'wrap' ? `<button type="button" id="revival-show-more-random">Show more</button></div>` : ''

        element.insertAdjacentHTML(where, html)
    }

    private getOnlySomeCards(cards: CardItem[], numberToGet: number): CardItem[] {
        return cards.slice(0, numberToGet)
    }

    private excludeCardsFromTheRest(cards: CardItem[], excludeCards: CardItem[]): CardItem[] {
        return cards.filter(card =>
            !excludeCards.find(excludeCard => excludeCard.title === card.title)
        )
    }

    private shuffle(arr: CardItem[]): CardItem[] {
        let j, x, i

        for (i = arr.length - 1; i > 0; i--) {
            j = Math.floor(Math.random() * (i + 1))
            x = arr[i]
            arr[i] = arr[j]
            arr[j] = x
        }

        return arr
    }
}