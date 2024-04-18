import conf from '@/conf'
import AdderInterface from '@/Adders/Adder'
import copyIconTemplate from '@/templates/copyIconTemplate'

export default class CopyButtonAdder implements AdderInterface {
    public add(): void {
        const targetsList = document.querySelectorAll<HTMLElement>(conf.selectors.targetForCodeExamples)
        const targets = Array.from(targetsList)

        if (!targets.length) {
            return
        }

        for (const target of targets) {
            target.insertAdjacentHTML('afterbegin', copyIconTemplate)
        }

        this.listenForButtonClick(targets)
    }

    private listenForButtonClick(targets: HTMLElement[]): void {
        for (const target of targets) {
            const copyIcon = target.querySelector<HTMLElement>(conf.selectors.copyCodeIcons)

            if (!copyIcon) {
                continue
            }

            copyIcon.addEventListener('click', () => this.copyCode(target))
        }
    }

    private copyCode(target: HTMLElement): void {
        const code = target.querySelector<HTMLElement>('code')

        if (!code) {
            console.warn('[PHP Revival] Code element not found')
            return
        }

        const cleanCode = this.cleanCode(code.innerHTML)

        this.copyTextToClipboard(cleanCode)
    }

    private cleanCode(code: string): string {
        return code
            .replace(/<br ?\/?>/g, "\n") // Replace <br> and <br /> with new line
            .replace(/<[^>]*>/g, '') // Remove HTML tags
            .replace(/&lt;/g, "<") // Replace "&lt;" with "<"
            .replace(/&gt;/g, ">") // Replace "&gt;" with ">"
            .replace(/&amp;/g, "&") // Replace "&amp;" with "&"
    }

    private copyTextToClipboard(text: string): void {
        navigator.clipboard.writeText(text)
            .then(() => {
                console.log('[PHP Revival] Code copied to clipboard')
            })
            .catch((error) => {
                console.error('[PHP Revival] Copy failed', error)
            })
    }
}