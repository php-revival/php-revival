import type { RandomVideo } from '@/types'
import randomVideosTemplate from '@/templates/randomVideosTemplate'
import randomVideos from '@/storage/randomVideos'
import Adder from '@/Adders/Adder'
import conf from '@/conf'
import arrShuffle from '@/modules/arrShuffle'

export default class RandomVideoAdder implements Adder {
    private restOfTheCards: RandomVideo[] = []

    public constructor() { }

    public add(): void {
        const target = document.querySelector<HTMLDivElement>(conf.selectors.home.targetForRandVideos)

        if (!target || window.location.pathname !== '/') {
            return
        }

        const cards = arrShuffle(randomVideos)
        const takenCards = this.getOnlySomeCards(cards, 7)

        this.restOfTheCards = this.excludeCardsFromTheRest(cards, takenCards)

        this.insertCardsIntoDOM('afterend', takenCards, target, true)

        setTimeout(() => {
            this.insertMoreVideosAfterClick()
            const container = document.querySelector('.revival-random-video-container') as HTMLDivElement

            if (container) {
                container.style.opacity = '1'
            }
        }, 500)
    }

    private insertMoreVideosAfterClick(): void {
        const button = document.getElementById('revival-show-more-random') as HTMLButtonElement

        button.addEventListener('click', () => {
            const takenCards = this.getOnlySomeCards(arrShuffle(this.restOfTheCards!), 12)

            this.restOfTheCards = this.excludeCardsFromTheRest(this.restOfTheCards, takenCards)
            this.insertCardsIntoDOM('beforebegin', takenCards, button, false)

            if (this.restOfTheCards.length === 0) {
                button.remove()
            }
        })
    }

    private insertCardsIntoDOM(where: InsertPosition, cards: RandomVideo[], element: HTMLElement, wrap: boolean): void {
        element.insertAdjacentHTML(where, randomVideosTemplate(cards, wrap))
    }

    private getOnlySomeCards(cards: RandomVideo[], numberToGet: number): RandomVideo[] {
        return cards.slice(0, numberToGet)
    }

    private excludeCardsFromTheRest(cards: RandomVideo[], excludeCards: RandomVideo[]): RandomVideo[] {
        return cards.filter(card =>
            !excludeCards.find(excludeCard => excludeCard.title === card.title)
        )
    }
}