export default class {
    constructor(config) {
        this.conf = config
    }

    execute() {
        this.changeFavicon()
        this.focusOnSearchBar()
        this.beautifyPhpCodeExamples()
    }

    beautifyPhpCodeExamples() {
        const codeAreas = document.querySelectorAll(this.conf.selectors.codeExamples)

        codeAreas.forEach(area => {
            let oldHtml = area.innerHTML
            let newHtml = oldHtml
                .replace(/([;]+)<br>([a-z\/])/, ';<br><br>$2')
                .replace('&lt;?php<br><br>', '&lt;?php<br>')
                .replace('&lt;?php<br>', '&lt;?php<br><br>')

            area.innerHTML = newHtml
        })
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