export default class {
    constructor(config) {
        this.conf = config
    }

    execute() {
        this.changeFavicon()
        this.focusOnSearchBar()
    }

    focusOnSearchBar() {
        if (window.location.pathname === '/') {
            document.querySelector('.search-query.tt-query').focus()
        }
    }

    changeFavicon() {
        let link = document.createElement('link')

        link.rel = 'shortcut icon'
        link.href = this.conf.faviconSrc

        document.head.appendChild(link);
    }

    select(selector) {
        return document.querySelector(selector)
    }
}