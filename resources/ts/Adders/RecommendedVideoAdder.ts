import type { RecommendedVideo } from '@/types'
import recommendedVideosTemplate from '@/templates/recommendedVideosTemplate'
import recommendedVideos from '@/modules/recommendedVideos'
import Adder from '@/Adders/Adder'
import conf from '@/conf'
import arrShuffle from '@/modules/arrShuffle'

export default class RecommendedVideoAdder implements Adder {
    private restOfTheCards: RecommendedVideo[] = []

    public constructor() { }

    public add(): void {
        const target = document.querySelector<HTMLDivElement>(conf.selectors.home.targetForRandVideos)

        if (!target || window.location.pathname !== '/') {
            return
        }

        const cards = arrShuffle(recommendedVideos)
        const takenCards = this.getOnlySomeCards(cards, 7)

        this.restOfTheCards = this.excludeCardsFromTheRest(cards, takenCards)

        this.insertCardsIntoDOM('afterend', takenCards, target, true)

        setTimeout(() => {
            this.insertMoreVideosAfterClick()
            const container = document.querySelector('.revival-recommended-video-container') as HTMLDivElement

            if (container) {
                container.style.opacity = '1'
            }
        }, 500)
    }

    private insertMoreVideosAfterClick(): void {
        const button = document.getElementById('revival-show-more-recommended') as HTMLButtonElement

        button.addEventListener('click', () => {
            const takenCards = this.getOnlySomeCards(arrShuffle(this.restOfTheCards!), 12)

            this.restOfTheCards = this.excludeCardsFromTheRest(this.restOfTheCards, takenCards)
            this.insertCardsIntoDOM('beforebegin', takenCards, button, false)

            if (this.restOfTheCards.length === 0) {
                button.remove()
            }
        })
    }

    private insertCardsIntoDOM(
        where: InsertPosition,
        cards: RecommendedVideo[],
        elem: HTMLElement,
        wrap: boolean,
    ): void {
        elem.insertAdjacentHTML(where, recommendedVideosTemplate(cards, wrap))
    }

    private getOnlySomeCards(cards: RecommendedVideo[], numberToGet: number): RecommendedVideo[] {
        return cards.slice(0, numberToGet)
    }

    private excludeCardsFromTheRest(cards: RecommendedVideo[], excludeCards: RecommendedVideo[]): RecommendedVideo[] {
        return cards.filter(card =>
            !excludeCards.find(excludeCard => excludeCard.title === card.title)
        )
    }
}