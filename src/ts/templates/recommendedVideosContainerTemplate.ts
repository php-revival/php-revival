export default () => {
    const container = createContainer()
    const targetForCards = createTargetForVideos()
    const btn = createButton()
    const title = createTitle()

    container.appendChild(title)
    container.appendChild(targetForCards)
    container.appendChild(btn)

    return { container, btn, targetForCards }
}

function createButton(): HTMLButtonElement {
    const btn = document.createElement('button')
    btn.type = 'button'
    btn.className = 'revival-recommended-videos-container__show-more'
    btn.innerText = 'Show more'

    return btn
}

function createTargetForVideos(): HTMLDivElement {
    const targetForCards = document.createElement('div')
    targetForCards.className = 'revival-recommended-videos-container--inner'

    return targetForCards
}

function createContainer(): HTMLDivElement {
    const container = document.createElement('div')
    container.className = 'revival-recommended-videos-container'

    return container
}

function createTitle(): HTMLElement {
    const title = document.createElement('h2')
    title.className = 'revival-home-sidebar-title'
    title.innerText = 'Recommended videos'

    return title
}