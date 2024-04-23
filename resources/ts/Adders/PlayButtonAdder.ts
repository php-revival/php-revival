import conf from '@/conf'
import AdderInterface from '@/Adders/Adder'
import playIcon from '@/templates/icons/playIcon'
import CodeCopier from '@/modules/CodeCopier'

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
        const code = await this.copyCode(target)

        if (!code) {
            return
        }

        const encodedCode = encodeURIComponent(code)

        window.open(`${conf.sandboxURL}?c=${encodedCode}`, '_blank')
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