import { createSection, createTitle } from '@/templates/homeSidebarTemplate'
import { VideoTag } from '@/types'
import dispatchEvent from '@/modules/dispatchEvent'
import conf from '@/conf'

export default () => {
    const section = createSection()
    const targetForCards = createTargetForVideos()
    const title = createTitle('Recommended Videos', 'youtube.webp?v=1')
    const tags = createTags()

    section.appendChild(title)
    section.appendChild(tags)
    section.appendChild(targetForCards)

    return { section, targetForCards }
}

function createTargetForVideos(): HTMLDivElement {
    const targetForCards = document.createElement('div')
    targetForCards.className = 'phpr-recommended-videos-section'

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

        tagElem.addEventListener('click', (e: MouseEvent) => {
            const btn = e.target as HTMLButtonElement

            if (btn.dataset.active === 'true') {
                return
            }

            for (const tag of tags) {
                tag.dataset.active = 'false'
            }

            btn.dataset.active = 'true'

            dispatchEvent(conf.events.videoTagSelected, tagLabel)
        })

        tags.push(tagElem)
    }

    const container = document.createElement('div')
    container.className = 'phpr-recommended-videos-section__tags'
    container.append(...tags)

    return container
}

function createTag(label: string): HTMLButtonElement {
    const tag = document.createElement('button')
    tag.type = 'button'
    tag.className = 'phpr-recommended-videos-section__tag'
    tag.innerText = label

    return tag
}
