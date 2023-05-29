import type { HomeLink } from '@/types'
import conf from '@/conf'

export default (link: HomeLink): string => {
    return `
        <p class="panel php-revival-panel">
            <a href="${link.link}" target="_blank">
                <img src="${conf.urls.server}images/icons/${link.iconName}">
                <span>${link.title}</span>
            </a>
        </p>
    `
}