import type { RecommendedVideo } from '@/types'
import recommendedVideosTemplate from '@/templates/recommendedVideosTemplate'
import recommendedVideosSectionTemplate from '@/templates/recommendedVideosSectionTemplate'
import recommendedVideos from '@/static/recommendedVideos'
import Adder from '@/Adders/Adder'
import conf from '@/conf'
import arrShuffle from '@/modules/arrShuffle'

export default class RecommendedVideoAdder implements Adder {
    private restOfCards: RecommendedVideo[] = []
    private sidebarElem: HTMLElement
    private sidebarSection: HTMLElement | null = null
    private targetForVideos: HTMLElement | null = null
    private loadMoreBtn: Element | null = null

    public constructor() {
        this.sidebarElem = document.querySelector(conf.selectors.home.rightSidebar)!
        this.restOfCards = arrShuffle(recommendedVideos)
    }

    public add(): void {
        if (!this.sidebarElem || window.location.pathname !== '/') {
            return
        }

        const videos = this.getFewVideos(7)

        this.insertSectionForVideos()
        this.insertVideos(videos)

        setTimeout(() => {
            this.insertMoreVideosAfterClick()

            if (this.sidebarSection) {
                this.sidebarSection.style.opacity = '1'
            }
        }, 300)
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

    private insertSectionForVideos(): void {
        const { section, btn, targetForCards } = recommendedVideosSectionTemplate()

        this.sidebarElem.appendChild(section)

        this.sidebarSection = section
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