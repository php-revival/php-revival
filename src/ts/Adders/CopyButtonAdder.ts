import AdderInterface from '@/Adders/Adder'
import copyIcon from '@/templates/icons/copyIcon'
import CodeCopier from '@/modules/CodeCopier'
import conf from '@/conf'

const SHOW_TOOLTIP_CLASS = 'php-revival-copy-icon__tooltip--show'
const REMOVE_TOOLTIP_AFTER = 1000

export default class CopyButtonAdder implements AdderInterface {
    public add(): void {
        const targetsList = document.querySelectorAll<HTMLElement>(conf.selectors.targetForCodeExamples)
        const targets = Array.from(targetsList)

        if (!targets.length) {
            return
        }

        for (const target of targets) {
            const icon = `<div title="Copy to a clipboard">${copyIcon}</div>`
            target.insertAdjacentHTML('afterbegin', icon)
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
        new CodeCopier(target)
            .copy()
            .then(() => this.showTooltip(target, 'Copied!', true))
            .catch(err => {
                this.showTooltip(target, 'Error!', false)
                console.error('[PHP Revival]: Copy failed', err)
            })
    }

    private showTooltip(target: HTMLElement, text: string, isSuccess: boolean): void {
        const tooltip = this.createTooltipElement(text, isSuccess)

        target.appendChild(tooltip)

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

        tooltip.classList.add(extraClass, 'php-revival-copy-icon__tooltip')

        document.body.appendChild(tooltip)

        return tooltip
    }
}