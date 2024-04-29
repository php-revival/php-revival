import type { RecommendedVideo } from '@/types'
import recommendedVideosTemplate from '@/templates/recommendedVideosTemplate'
import recommendedVideosContainerTemplate from '@/templates/recommendedVideosContainerTemplate'
import recommendedVideos from '@/static/recommendedVideos'
import Adder from '@/Adders/Adder'
import conf from '@/conf'
import arrShuffle from '@/modules/arrShuffle'

export default class RecommendedVideoAdder implements Adder {
    private restOfCards: RecommendedVideo[] = []
    private rightSidebarElem: HTMLElement
    private videosContainer: HTMLElement | null = null
    private targetForVideos: HTMLElement | null = null
    private loadMoreBtn: Element | null = null

    public constructor() {
        this.rightSidebarElem = document.querySelector(conf.selectors.home.rightSidebar)!
        this.restOfCards = arrShuffle(recommendedVideos)
    }

    public add(): void {
        if (!this.rightSidebarElem || window.location.pathname !== '/') {
            return
        }

        const videos = this.getFewVideos(7)

        this.insertVideosContainer()
        this.insertVideos(videos)

        setTimeout(() => {
            this.insertMoreVideosAfterClick()

            if (this.videosContainer) {
                this.videosContainer.style.opacity = '1'
            }
        }, 500)
    }

    private insertMoreVideosAfterClick(): void {
        if (!this.loadMoreBtn) {
            return
        }

        this.loadMoreBtn.addEventListener('click', () => {
            this.insertVideos(this.getFewVideos(12))

            if (this.restOfCards.length === 0 && this.loadMoreBtn) {
                this.loadMoreBtn.remove()
            }
        })
    }

    private insertVideosContainer(): void {
        const { container, btn, targetForCards } = recommendedVideosContainerTemplate()

        this.rightSidebarElem.appendChild(container)

        this.videosContainer = container
        this.targetForVideos = targetForCards
        this.loadMoreBtn = btn
    }

    private insertVideos(cards: RecommendedVideo[]): void {
        if (!this.targetForVideos) {
            return
        }

        const videosElements = recommendedVideosTemplate(cards)

        for (const videoElement of videosElements) {
            this.targetForVideos.appendChild(videoElement)
        }
    }

    private getFewVideos(numberToGet: number): RecommendedVideo[] {
        const videos = this.restOfCards.slice(0, numberToGet)

        this.excludeCardsFromRest(videos)

        return videos
    }

    private excludeCardsFromRest(excludeCards: RecommendedVideo[]) {
        this.restOfCards = this.restOfCards.filter(card =>
            !excludeCards.find(excludeCard => excludeCard.title === card.title)
        )
    }
}