import conf from '@/conf'
import AdderInterface from '@/Adders/Adder'
import playIcon from '@/templates/icons/playIcon'
import CodeCopier from '@/modules/CodeCopier'

const MAX_URL_LENGTH = 2040

export default class PlayButtonAdder implements AdderInterface {
    public add(): void {
        const targetsList = document.querySelectorAll<HTMLElement>(conf.selectors.targetForCodeExamples)
        const targets = Array.from(targetsList)

        if (!targets.length) {
            return
        }

        for (const target of targets) {
            target.insertAdjacentHTML('afterbegin', playIcon)
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
            code = this.prependPhpOpeningTag(code)
        }

        const url = `${conf.sandboxURL}?c=${encodeURIComponent(code)}`

        if (this.isUrlTooLong(url)) {
            window.open(`${conf.sandboxURL}?c=[paste your code here]`, '_blank')
            return
        }

        window.open(url, '_blank')
    }

    private missingOpeningTag(code: string): boolean {
        return !code.startsWith('<?php')
    }

    private prependPhpOpeningTag(code: string): string {
        return `<?php\n${code}`
    }

    private isUrlTooLong(url: string): boolean {
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