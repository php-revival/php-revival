import axios from 'axios'
import CardItemInterface from '../interfaces/CardItemInterface'
import cardItemTemplate from '../templates/cardItemTemplate'
import conf from '../conf'

export default class {
    private restOfTheCards: CardItemInterface[] = []

    public constructor(private target: HTMLDivElement) {}

    public injectContent(): void {
        this.showSpinner(true)

        axios.get(conf.urls.server + conf.urls.randomVideos)
            .then(res => this.handleResponse(res.data))
            .catch(err => {
                console.error(err)
                this.showSpinner(false)
            })
    }

    private handleResponse(cards: CardItemInterface[]): void {
        cards = this.shuffle(cards)
        const takenCards = this.getOnlySomeCards(cards, 3)

        this.restOfTheCards = this.excludeCardsFromTheRest(cards, takenCards)

        this.insertCardsIntoDOM('afterend', takenCards, this.target, 'wrap')
        this.showLoadedCards()
        this.insertMoreVideosAfterClick()
    }

    private insertMoreVideosAfterClick(): void {
        const button = document.getElementById('revival-show-more-random') as HTMLButtonElement

        button.addEventListener('click', () => {
            const takenCards = this.getOnlySomeCards(this.restOfTheCards!, 10)

            this.restOfTheCards = this.excludeCardsFromTheRest(this.restOfTheCards, takenCards)
            this.insertCardsIntoDOM('beforebegin', takenCards, button, 'no-wrap')

            if (this.restOfTheCards.length === 0) button.remove()
        })
    }

    private insertCardsIntoDOM(where: InsertPosition, cards: CardItemInterface[], element: HTMLElement, withWrap: 'wrap' | 'no-wrap'): void {

        let html = withWrap === 'wrap' ? '<div class="revival-random-video-container">' : ''
        cards.forEach(card => html += cardItemTemplate(card))
        html += withWrap === 'wrap' ? `<button type="button" id="revival-show-more-random">Show more</button></div>` : ''
         
        element.insertAdjacentHTML(where, html)
    }

    private showLoadedCards(): void {
        setTimeout(() => {
            this.showSpinner(false)
            const target = document.querySelector('.revival-random-video-container') as HTMLDivElement
            if (target) target.style.opacity = '1'
        }, 500)
    }

    private getOnlySomeCards(cards: CardItemInterface[], numberToGet: number): CardItemInterface[] {
        return cards.slice(0, numberToGet)
    }

    private excludeCardsFromTheRest(cards: CardItemInterface[], excludeCards: CardItemInterface[]): CardItemInterface[] {
        return cards.filter(card =>
            !excludeCards.find(excludeCard => excludeCard.title === card.title)
        )
    }

    private random(maxNumber: number): number {
        return Math.floor(Math.random() * maxNumber)
    }

    private shuffle(arr: CardItemInterface[]): CardItemInterface[] {
        return arr.sort(() => Math.random() - 0.5);
    }

    private showSpinner(show: boolean): void {
        if (show) {
            this.target.insertAdjacentHTML('afterend', `
                <div class="revival-spinner"
                    id="php-revival-random-videos-spinner"
                    style="margin-left:120px;top:30px"
                ></div>
            `)
        }
        
        if (!show) {
            const spinner = document.getElementById('php-revival-random-videos-spinner') as HTMLDivElement
            spinner ? spinner.remove() : null
        }
    }
}