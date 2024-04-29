export default () => {
    const container = createContainer()
    const targetForCards = createTargetForCards()
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
    btn.classList.add('revival-recommended-videos-container__show-more')
    btn.innerText = 'Show more'

    return btn
}

function createTargetForCards(): HTMLDivElement {
    const targetForCards = document.createElement('div')
    targetForCards.classList.add('revival-recommended-videos-container--inner')

    return targetForCards
}

function createContainer(): HTMLDivElement {
    const container = document.createElement('div')
    container.classList.add('revival-recommended-videos-container')

    return container
}

function createTitle(): HTMLElement {
    const title = document.createElement('h2')
    title.classList.add('revival-home-sidebar-title')
    title.innerText = 'Recommended videos'

    return title
}