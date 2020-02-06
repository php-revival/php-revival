import conf from '../config'

export default class {
    private phpVersion: HTMLParagraphElement | null

    public constructor() {
        this.phpVersion = document.querySelector<HTMLParagraphElement>(conf.selectors.phpVersionInfo)
    }

    public applyStylesAndModifyTheInfo(): void {
        if (!this.phpVersion) return

        this.removeBracketsFromPhpVersions()
        this.animatePhpVersionAppearing()
    }

    private removeBracketsFromPhpVersions(): void {
        if (!this.phpVersion) return

        this.phpVersion.innerHTML = this.phpVersion.innerHTML
            .replace(/^\(/, '')
            .replace(/\)$/, '')
    }

    private animatePhpVersionAppearing(): void {
        if (!this.phpVersion) return
        this.phpVersion.classList.add('verinfo--show')
    }
}