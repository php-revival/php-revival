import conf from '../../conf'
import HomeLink from '../../interfaces/HomeLink'
import AdderInterface from './AdderInterface'

export default class implements AdderInterface {
    public injectContent(): void {
        const target = document.querySelector(conf.selectors.targetForHomeLinks)

        if (window.location.pathname !== '/' || !target)
            return

        let linksHtml = ''

        for (const homeLink of conf.homeLinks) {
            linksHtml += getHomeLinkHtml(homeLink)
        }

        target.insertAdjacentHTML('afterend', linksHtml)
    }
}

function getHomeLinkHtml(homeLink: HomeLink): string {

    return `
        <p class="panel php-revival-panel">
            <a href="${homeLink.link}" target="_blank">
                <img src="${conf.urls.server}images/icons/${homeLink.iconName}">
                <span>${homeLink.title}</span>
            </a>
        </p>
    `
}