import type { RecommendedVideo, VideoTag } from '@/types'
import recommendedVideosSectionTemplate from '@/templates/recommendedVideosSectionTemplate'
import recommendedVideos from '@/static/recommendedVideos'
import Adder from '@/Adders/Adder'
import conf from '@/conf'
import listenEvent from '@/modules/listenEvent'
import loadMoreVideosButtonTemplate from '@/templates/loadMoreVideosButtonTemplate'
import recommendedVideoTemplate from '@/templates/recommendedVideoTemplate'

const AMOUNT_OF_VIDEOS_TO_SHOW = 2

export default class RecommendedVideoAdder implements Adder {
    private videosToDisplay: RecommendedVideo[] = []
    private sidebarElem: HTMLElement
    private sidebarSection: HTMLElement | null = null
    private targetForVideos: HTMLElement | null = null
    private loadMoreBtn: Element | null = null

    public constructor() {
        this.sidebarElem = document.querySelector(conf.selectors.home.rightSidebar)!
    }

    public add(): void {
        if (!this.sidebarElem || this.isNotHomePage()) {
            return
        }

        this.insertSectionForVideos()
        this.insertVideos(recommendedVideos)
        this.showSectionForVideos()

        listenEvent(conf.events.videoTagSelected, this.filterVideos.bind(this))
    }

    private showSectionForVideos(): void {
        setTimeout(() => {
            if (this.sidebarSection) {
                this.sidebarSection.style.opacity = '1'
            }
        }, 300)
    }

    private isNotHomePage(): boolean {
        return window.location.pathname !== '/'
    }

    private filterVideos(tagLabel: VideoTag): void {
        const videos = recommendedVideos.filter(v => v.tags.includes(tagLabel))

        // toto: filter videos
    }

    private removeLoadMoreBtn(): void {
        if (this.loadMoreBtn) {
            this.loadMoreBtn.remove()
        }
    }

    private showLoadMoreButton(): void {
        if (!this.sidebarSection) {
            console.error('this.sidebarSection is not found in showLoadMoreButton')
            return
        }

        this.sidebarSection.appendChild(this.createLoadMoreButton())
    }

    private createLoadMoreButton(): HTMLButtonElement {
        const loadMoreButton = loadMoreVideosButtonTemplate()
        this.loadMoreBtn = loadMoreButton
        return loadMoreButton
    }

    private clearVideos(): void {
        if (!this.targetForVideos) {
            return
        }

        this.targetForVideos.innerHTML = ''
    }

    private insertMoreVideosAfterClick(): void {
        if (!this.loadMoreBtn) {
            return
        }

        this.loadMoreBtn.addEventListener('click', () => {
            const restVideos = this.excludeVideosAlreadyDisplayed(recommendedVideos)
            const additionalVideos = restVideos.slice(0, AMOUNT_OF_VIDEOS_TO_SHOW)

            this.videosToDisplay.push(...additionalVideos)

            this.appendVideos(additionalVideos)
        })
    }

    private insertSectionForVideos(): void {
        const { section, targetForCards } = recommendedVideosSectionTemplate()

        this.sidebarElem.appendChild(section)
        this.sidebarSection = section
        this.targetForVideos = targetForCards
    }

    private insertVideos(allVideos: RecommendedVideo[]): void {
        if (!this.targetForVideos || !this.sidebarSection) {
            return
        }

        if (allVideos.length > AMOUNT_OF_VIDEOS_TO_SHOW) {
            this.showLoadMoreButton()
            let videosToShow = this.excludeVideosAlreadyDisplayed(allVideos)
            this.videosToDisplay = videosToShow.slice(0, AMOUNT_OF_VIDEOS_TO_SHOW)
        } else {
            this.removeLoadMoreBtn()
            this.videosToDisplay = allVideos
        }

        this.clearVideos()

        for (const video of this.videosToDisplay) {
            const videoElem = recommendedVideoTemplate(video)
            this.targetForVideos.appendChild(videoElem)
        }

        this.insertMoreVideosAfterClick()
    }

    private excludeVideosAlreadyDisplayed(
        videos: RecommendedVideo[],
    ): RecommendedVideo[] {
        return videos.filter(v => !this.videosToDisplay.includes(v))
    }

    private appendVideos(videos: RecommendedVideo[]): void {
        if (!this.targetForVideos) {
            console.error('targetForVideos is not found in appendVideos')
            return
        }

        for (const video of videos) {
            const videoElem = recommendedVideoTemplate(video)
            this.targetForVideos.appendChild(videoElem)
        }

        if (this.videosToDisplay.length === recommendedVideos.length) {
            this.removeLoadMoreBtn()
        }
    }
}
