import getImageUrl from '@/modules/getImageUrl'

export const createTitle = (header: string, iconName?: string): HTMLElement => {
    const title = document.createElement('h2')
    title.className = 'php-revival-home-sidebar-section__title'
    title.innerText = header

    const img = document.createElement('img')
    img.src = getImageUrl(`icons/${iconName ? iconName : 'link-white.png'}`)
    img.alt = header + ' icon'

    title.prepend(img)

    return title
}

export const createSection = (): HTMLElement => {
    const section = document.createElement('section')
    section.className = 'php-revival-home-sidebar-section'

    return section
}
