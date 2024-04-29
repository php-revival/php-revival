export default () => {
    const container = createContainer()
    const targetForLinks = createTargetForLinks()
    const title = createTitle()

    container.appendChild(title)
    container.appendChild(targetForLinks)

    return { container, targetForLinks }
}

function createTargetForLinks(): HTMLDivElement {
    const targetForCards = document.createElement('div')
    targetForCards.classList.add('revival-recommended-links-container--inner')

    return targetForCards
}

function createContainer(): HTMLDivElement {
    const container = document.createElement('div')
    container.classList.add('revival-recommended-links-container')

    return container
}

function createTitle(): HTMLElement {
    const title = document.createElement('h2')
    title.classList.add('revival-home-sidebar-title')
    title.innerText = 'Recommended links'

    return title
}