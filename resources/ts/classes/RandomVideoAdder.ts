import axios from 'axios'
import CardItemInterface from '../interfaces/CardItemInterface'
import cardItemTemplate from '../templates/cardItemTemplate'
import conf from '../config'

export default class {
    public constructor(private target: HTMLDivElement) {}

    public injectContent(): void {
        axios.get(conf.urls.randomVideos)
            .then(res => this.handleResponse(res.data))
            .catch(err => console.error(err))
    }

    private handleResponse(cards: CardItemInterface[]): void {
        let html = '<div class="inner">'
        cards.forEach(card => html += cardItemTemplate(card))
        this.target.insertAdjacentHTML('afterend', `${html}</div>`)
    }
}