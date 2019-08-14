import conf from '../config'

export default class {
    constructor() {
        this.phpVersion = document.querySelector(conf.selectors.phpVersionInfo)
    }

    applyStylesAndModifyTheInfo() {
        if (!this.phpVersion) return this

        this.removeBracketsFromPhpVersions()
        this.animatePhpVersionAppearing()
    }

    removeBracketsFromPhpVersions() {
        this.phpVersion.innerHTML = this.phpVersion.innerHTML
            .replace(/^\(/, '')
            .replace(/\)$/, '')
    }

    animatePhpVersionAppearing() {
        this.phpVersion.classList.add('verinfo--show')
    }
}