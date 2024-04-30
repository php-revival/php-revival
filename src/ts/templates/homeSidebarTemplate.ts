export const createTitle = (header: string): HTMLElement => {
    const title = document.createElement('h2')
    title.className = 'php-revival-home-sidebar-section__title'
    title.innerText = header

    return title
}

export const createSection = (): HTMLElement => {
    const section = document.createElement('section')
    section.className = 'php-revival-home-sidebar-section'

    return section
}