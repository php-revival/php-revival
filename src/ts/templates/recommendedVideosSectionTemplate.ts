import { createSection, createTitle } from '@/templates/homeSidebarTemplate'

export default () => {
    const section = createSection()
    const targetForCards = createTargetForVideos()
    const btn = createButton()
    const title = createTitle('Recommended Videos')

    section.appendChild(title)
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