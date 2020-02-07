import axios from 'axios'
import CardItemInterface from '../interfaces/CardItemInterface'
import cardItemTemplate from '../templates/cardItemTemplate'
import conf from '../conf'

export default class {
    public constructor(private target: HTMLDivElement) {}

    public injectContent(): void {
        axios.get(conf.urls.server + conf.urls.randomVideos)
            .then(res => this.handleResponse(res.data))
            .catch(err => console.error(err))
    }

    private handleResponse(cards: CardItemInterface[]): void {
        cards = this.shuffle(this.getOnly3Cards(cards))

        let html = '<div class="inner">'
        cards.forEach(card => html += cardItemTemplate(card))
        this.target.insertAdjacentHTML('afterend', `${html}</div>`)
    }

    private getOnly3Cards(cards: CardItemInterface[]): CardItemInterface[] {
        const sliceFrom = this.random(cards.length - 2)
        const sliceTo = sliceFrom + 3
        return cards.slice(sliceFrom, sliceTo)
    }

    private random(maxNumber: number): number {
        return Math.floor(Math.random() * maxNumber)
    }

    private shuffle(arr: CardItemInterface[]): CardItemInterface[] {
        return arr.sort(() => Math.random() - 0.5);
    }
}