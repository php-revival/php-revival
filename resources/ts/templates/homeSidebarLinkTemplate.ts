import type { HomeLink } from '@/types'
import getImageUrl from '@/modules/getImageUrl'

export default (link: HomeLink): string => {
    const src = getImageUrl(`icons/${link.iconName}`)

    return `
        <p class="panel php-revival-panel">
            <a href="${link.link}" target="_blank">
                <img src="${src}">
                <span>${link.title}</span>
            </a>
        </p>
    `
}