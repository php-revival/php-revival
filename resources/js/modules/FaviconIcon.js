import conf from '../config'

export default class {
    replaceWithCustomIcon() {
        const link = document.createElement('link')

        link.rel = 'shortcut icon'
        link.href = conf.faviconSrc

        document.head.appendChild(link);

        return this
    }
}