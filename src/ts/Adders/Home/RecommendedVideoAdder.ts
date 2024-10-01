import type { RecommendedVideo } from '@/types'
import recommendedVideosTemplate from '@/templates/recommendedVideosTemplate'
import recommendedVideosSectionTemplate from '@/templates/recommendedVideosSectionTemplate'
import recommendedVideos from '@/static/recommendedVideos'
import Adder from '@/Adders/Adder'
import conf from '@/conf'
import arrShuffle from '@/modules/arrShuffle'
import listenEvent from '@/modules/listenEvent'

const AMOUNT_OF_VIDEOS_TO_SHOW = 20

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

        const videos = this.getFewVideos(AMOUNT_OF_VIDEOS_TO_SHOW)

        this.insertSectionForVideos()
        this.insertVideos(videos)

        listenEvent(conf.events.videoTagSelected, (tagLabel: string) => {
            console.log(tagLabel)
        })

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
            this.insertVideos(this.getFewVideos(AMOUNT_OF_VIDEOS_TO_SHOW))

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

        for (const vid of videosElements) {
            this.targetForVideos.appendChild(vid)
        }
    }

    private getFewVideos(numberToGet: number): RecommendedVideo[] {
        const videos = this.restOfCards.slice(0, numberToGet)

        this.excludeCardsFromRest(videos)

        return videos
    }

    private excludeCardsFromRest(excludeCards: RecommendedVideo[]) {
        this.restOfCards = this.restOfCards.filter(
            card =>
                !excludeCards.find(excludeCard => excludeCard.title === card.title),
        )
    }
}
