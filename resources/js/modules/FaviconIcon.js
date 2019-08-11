import conf from '../config'

export default class {
    constructor() {
        this.link = document.createElement('link')
    }

    replaceWithCustomIcon() {
        if (!this.link) return this

        link.rel = 'shortcut icon'
        link.href = conf.faviconSrc

        document.head.appendChild(link);

        return this
    }
}