export default (header: string) => {
    const container = createContainer()
    const targetForLinks = createTargetForLinks()
    const title = createTitle(header)

    container.appendChild(title)
    container.appendChild(targetForLinks)

    return { container, targetForLinks }
}

function createTargetForLinks(): HTMLDivElement {
    const targetForCards = document.createElement('div')
    targetForCards.className = 'revival-home-links-container--inner'

    return targetForCards
}

function createContainer(): HTMLDivElement {
    const container = document.createElement('div')
    container.className = 'revival-home-links-container'

    return container
}

function createTitle(header: string): HTMLElement {
    const title = document.createElement('h2')
    title.className = 'revival-home-sidebar-title'
    title.innerText = header

    return title
}