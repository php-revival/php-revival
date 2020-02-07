import axios from 'axios'
import CardItemInterface from '../interfaces/CardItemInterface'
import cardItemTemplate from '../templates/cardItemTemplate'
import conf from '../conf'

export default class {
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
        cards = this.shuffle(this.getOnly3Cards(cards))

        let html = '<div class="revival-random-video-container">'
        cards.forEach(card => html += cardItemTemplate(card))
        this.target.insertAdjacentHTML('afterend', `${html}</div>`)
        this.showLoadedCards()
    }

    private showLoadedCards(): void {
        setTimeout(() => {
            this.showSpinner(false)
            const target = document.querySelector('.revival-random-video-container') as HTMLDivElement
            if (target) target.style.opacity = '1'
        }, 100)
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