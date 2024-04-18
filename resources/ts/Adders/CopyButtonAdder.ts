import conf from '@/conf'
import AdderInterface from '@/Adders/Adder'
import copyIcon from '@/templates/icons/copyIcon'

const SHOW_TOOLTIP_CLASS = 'php-revival-copy-icon__tooltip--show'
const REMOVE_TOOLTIP_AFTER = 1000

export default class CopyButtonAdder implements AdderInterface {
    private lastCopiedAt: number = 0

    public add(): void {
        const targetsList = document.querySelectorAll<HTMLElement>(conf.selectors.targetForCodeExamples)
        const targets = Array.from(targetsList)

        if (!targets.length) {
            return
        }

        for (const target of targets) {
            target.insertAdjacentHTML('afterbegin', copyIcon)
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

        this.copyTextToClipboard(cleanCode, target)
    }

    private cleanCode(code: string): string {
        return code
            .replace(/<br ?\/?>/g, "\n") // Replace <br> and <br /> with new line
            .replace(/<[^>]*>/g, '') // Remove HTML tags
            .replace(/&lt;/g, "<") // Replace "&lt;" with "<"
            .replace(/&gt;/g, ">") // Replace "&gt;" with ">"
            .replace(/&amp;/g, "&") // Replace "&amp;" with "&"
    }

    private copyTextToClipboard(text: string, target: HTMLElement): void {
        if (this.notAllowedToCopy()) {
            return
        }

        navigator.clipboard.writeText(text)
            .then(() => this.showTooltip(target, 'Copied!', true))
            .catch(e => {
                this.showTooltip(target, 'Error!', false)
                console.error('[PHP Revival]: Copy failed', e)
            })
            .finally(() => this.lastCopiedAt = Date.now())
    }

    private notAllowedToCopy(): boolean {
        return Date.now() - this.lastCopiedAt < 1300
    }

    private showTooltip(target: HTMLElement, text: string, isSuccess: boolean): void {
        const tooltip = this.createTooltipElement(text, isSuccess)

        target.insertAdjacentElement('afterbegin', tooltip)

        this.displayTooltipElement(tooltip)
        this.removeTooltipAfterDelay(tooltip)
    }

    private displayTooltipElement(tooltip: Element): void {
        setTimeout(() => tooltip.classList.add(SHOW_TOOLTIP_CLASS), 100)
    }

    private removeTooltipAfterDelay(tooltip: Element): void {
        setTimeout(() => {
            tooltip.classList.remove(SHOW_TOOLTIP_CLASS)
            setTimeout(() => tooltip.remove(), 300)
        }, REMOVE_TOOLTIP_AFTER)
    }

    private createTooltipElement(text: string, isSuccess: boolean): Element {
        const tooltip = document.createElement('div')

        tooltip.textContent = text

        const extraClass = isSuccess
            ? 'php-revival-copy-icon__tooltip--green'
            : 'php-revival-copy-icon__tooltip--red'

        tooltip.classList.add(extraClass)
        tooltip.classList.add('php-revival-copy-icon__tooltip')

        document.body.appendChild(tooltip)

        return tooltip
    }
}