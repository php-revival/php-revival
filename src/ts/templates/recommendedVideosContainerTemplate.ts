export default () => {
    const container = createContainer()
    const targetForCards = createTargetForCards()
    const btn = createButton()

    container.appendChild(targetForCards)
    container.appendChild(btn)

    return { container, btn, targetForCards }
}

function createButton(): HTMLButtonElement {
    const btn = document.createElement('button')
    btn.type = 'button'
    btn.id = 'revival-show-more-recommended'
    btn.innerText = 'Show more'

    return btn
}

function createTargetForCards(): HTMLDivElement {
    const targetForCards = document.createElement('div')
    targetForCards.classList.add('revival-recommended-video-container__inner')

    return targetForCards
}

function createContainer(): HTMLDivElement {
    const container = document.createElement('div')
    container.classList.add('revival-recommended-video-container')

    return container
}