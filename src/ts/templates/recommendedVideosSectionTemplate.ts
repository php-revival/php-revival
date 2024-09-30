import { createSection, createTitle } from '@/templates/homeSidebarTemplate'
import { VideoTag } from '@/types'

export default () => {
    const section = createSection()
    const targetForCards = createTargetForVideos()
    const btn = createButton()
    const title = createTitle('Recommended Videos', 'youtube.webp')
    const tags = createTags()

    section.appendChild(title)
    section.appendChild(tags)
    section.appendChild(targetForCards)
    section.appendChild(btn)

    return { section, btn, targetForCards }
}

function createButton(): HTMLButtonElement {
    const btn = document.createElement('button')
    btn.type = 'button'
    btn.className = 'php-revival-recommended-videos-section__show-more'
    btn.innerText = 'Show more'

    return btn
}

function createTargetForVideos(): HTMLDivElement {
    const targetForCards = document.createElement('div')
    targetForCards.className = 'php-revival-recommended-videos-section'

    return targetForCards
}

function createTags(): HTMLDivElement {
    const tags: HTMLButtonElement[] = []
    const allTags: VideoTag[] = Object.values(VideoTag) as VideoTag[]

    for (const tagLabel of allTags) {
        const tagElem = createTag(tagLabel)

        if (tagLabel === VideoTag.All) {
            tagElem.dataset.active = 'true'
        }

        // TODO: Add event listener to filter videos by tag

        tags.push(tagElem)
    }

    const container = document.createElement('div')
    container.className = 'php-revival-recommended-videos-section__tags'
    container.append(...tags)

    return container
}

function createTag(label: string): HTMLButtonElement {
    const tag = document.createElement('button')
    tag.type = 'button'
    tag.className = 'php-revival-recommended-videos-section__tag'
    tag.innerText = label

    return tag
}
