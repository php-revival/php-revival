import { createSection, createTitle } from '@/templates/homeSidebarTemplate'

export default (header: string) => {
    const section = createSection()
    const targetForLinks = createTargetForLinks()
    const title = createTitle(header)

    section.appendChild(title)
    section.appendChild(targetForLinks)

    return { section, targetForLinks }
}

function createTargetForLinks(): HTMLDivElement {
    const targetForCards = document.createElement('div')
    targetForCards.className = 'phpr-home-links-section'

    return targetForCards
}
