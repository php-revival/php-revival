export default (): HTMLButtonElement => {
    const btn = document.createElement('button')
    btn.type = 'button'
    btn.className = 'phpr-recommended-videos-section__show-more'
    btn.innerText = 'Show more'

    return btn
}
