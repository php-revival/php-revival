import Modifier from "../abstract/Modifier"

export default class extends Modifier {
    public constructor(private phpVersion: HTMLParagraphElement) {
        super()
    }

    public modify(): void {
        this.removeBracketsFromPhpVersions()
        this.animatePhpVersionAppearing()
    }

    private removeBracketsFromPhpVersions(): void {
        this.phpVersion.innerHTML = this.phpVersion.innerHTML
            .replace(/^\(/, '')
            .replace(/\)$/, '')
    }

    private animatePhpVersionAppearing(): void {
        this.phpVersion.classList.add('verinfo--show')
    }
}