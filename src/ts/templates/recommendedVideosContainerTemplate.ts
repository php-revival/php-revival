export default () => {
    const container = document.createElement('div')
    container.classList.add('revival-recommended-video-container')

    const targetForCards = document.createElement('div')
    targetForCards.classList.add('revival-recommended-video-container__inner')

    const btn = document.createElement('button')
    btn.type = 'button'
    btn.id = 'revival-show-more-recommended'
    btn.innerText = 'Show more'

    container.appendChild(targetForCards)
    container.appendChild(btn)

    return { container, btn, targetForCards }
}