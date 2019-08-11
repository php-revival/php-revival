import conf from '../config'

export default class {
    constructor() {
        this.phpVersion = document.querySelector(conf.selectors.phpVersionInfo)
    }

    animatePhpVersionAppearing() {
        if (!this.phpVersion) return this

        this.phpVersion.classList.add('verinfo--show')

        return this
    }
}