import getImageUrl from '@/modules/getImageUrl'

export const createTitle = (header: string, iconName?: string): HTMLElement => {
    const title = document.createElement('h2')
    title.className = 'phpr-home-sidebar-section__title'
    title.innerText = header

    if (iconName) {
        const img = document.createElement('img')
        img.src = getImageUrl(`icons/${iconName}`)
        img.alt = header + ' icon'

        title.prepend(img)
    }

    return title
}

export const createSection = (): HTMLElement => {
    const section = document.createElement('section')
    section.className = 'phpr-home-sidebar-section'

    return section
}
