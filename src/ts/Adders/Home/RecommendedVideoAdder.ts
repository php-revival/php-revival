import type { RecommendedVideo, VideoTag } from '@/types'
import recommendedVideosSectionTemplate from '@/templates/recommendedVideosSectionTemplate'
import recommendedVideos from '@/static/recommendedVideos'
import Adder from '@/Adders/Adder'
import conf from '@/conf'
import listenEvent from '@/modules/listenEvent'
import loadMoreVideosButtonTemplate from '@/templates/loadMoreVideosButtonTemplate'
import recommendedVideoTemplate from '@/templates/recommendedVideoTemplate'

const AMOUNT_OF_VIDEOS_TO_SHOW = 20

export default class RecommendedVideoAdder implements Adder {
    private videosToDisplay: RecommendedVideo[] = []
    private restOfVideos: RecommendedVideo[] = []
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
        this.insertVideos(videos)
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
            const restVideos = this.excludeVideosAlreadyDisplayed(this.restOfVideos)
            const additionalVideos = restVideos.slice(0, AMOUNT_OF_VIDEOS_TO_SHOW)

            this.videosToDisplay.push(...additionalVideos)
            this.restOfVideos = restVideos.slice(AMOUNT_OF_VIDEOS_TO_SHOW)

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
        if (!this.targetForVideos) {
            console.error('targetForVideos is not found in insertVideos')
            return
        }

        if (!this.sidebarSection) {
            console.error('sidebarSection is not found in insertVideos')
            return
        }

        this.removeLoadMoreBtn()

        if (allVideos.length > AMOUNT_OF_VIDEOS_TO_SHOW) {
            this.videosToDisplay = []
            this.showLoadMoreButton()

            let videosToShow = this.excludeVideosAlreadyDisplayed(allVideos)

            this.videosToDisplay = videosToShow.slice(0, AMOUNT_OF_VIDEOS_TO_SHOW)
            this.restOfVideos = videosToShow.slice(AMOUNT_OF_VIDEOS_TO_SHOW)
        } else {
            this.videosToDisplay = allVideos
            this.restOfVideos = []
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

        if (this.restOfVideos.length === 0) {
            this.removeLoadMoreBtn()
        }
    }
}
