import conf from '@/conf'
import AdderInterface from '@/Adders/Adder'
import playIcon from '@/templates/icons/playIcon'
import CodeCopier from '@/modules/CodeCopier'
import convertPHPVersionToNumeric from '@/modules/convertPHPVersionToNumeric'

const MAX_URL_LENGTH = 2040

export default class PlayButtonAdder implements AdderInterface {
    public add(): void {
        const targetsList = document.querySelectorAll<HTMLElement>(conf.selectors.targetForCodeExamples)
        const targets = Array.from(targetsList)

        if (!targets.length) {
            return
        }

        for (const target of targets) {
            const icon = `<div title="Evaluate in Sandbox">${playIcon}</div>`
            target.insertAdjacentHTML('afterbegin', icon)
        }

        this.listenForButtonClick(targets)
    }

    private listenForButtonClick(targets: HTMLElement[]): void {
        for (const target of targets) {
            const playIcon = target.querySelector<HTMLElement>(conf.selectors.playCodeIcons)

            if (!playIcon) {
                continue
            }

            playIcon.addEventListener('click', () => this.redirectToSandbox(target))
        }
    }

    private async redirectToSandbox(target: HTMLElement): Promise<void> {
        let code = await this.copyCode(target)

        if (!code) {
            return
        }

        if (this.missingOpeningTag(code)) {
            code = this.prependPHPOpeningTag(code)
        }

        const url = `${conf.sandboxURL}?c=${encodeURIComponent(code)}`

        if (this.isURLTooLong(url)) {
            window.open(`${conf.sandboxURL}?c=[paste your code here]`, '_blank')
            return
        }

        const phpVersion = this.getPHPVersion(target)

        if (phpVersion) {
            window.open(`${url}&v=${phpVersion}`, '_blank')
            return
        }

        window.open(url, '_blank')
    }

    private missingOpeningTag(code: string): boolean {
        return !code.startsWith('<?php')
    }

    private getPHPVersion(target: HTMLElement): string | null {
        const parent = target.parentElement

        if (!parent) {
            return null
        }

        const labelElem = parent.querySelector<HTMLElement>('.php8-compare__label')

        if (!labelElem) {
            return null
        }

        const version = labelElem.textContent

        if (!version) {
            return null
        }

        return convertPHPVersionToNumeric(version)
    }

    private prependPHPOpeningTag(code: string): string {
        return `<?php\n${code}`
    }

    private isURLTooLong(url: string): boolean {
        return url.length > MAX_URL_LENGTH
    }

    private async copyCode(target: HTMLElement): Promise<string | null> {
        try {
            return await new CodeCopier(target).copy()
        } catch (err) {
            console.error('[PHP Revival]: Coping failed', err)
            return null
        }
    }
}