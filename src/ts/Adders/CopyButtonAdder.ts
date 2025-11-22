import AdderInterface from '@/Adders/Adder'
import copyIcon from '@/templates/icons/copyIcon'
import CodeCopier from '@/modules/CodeCopier'
import conf from '@/conf'
import Tooltip from '@/modules/Tooltip'

export default class CopyButtonAdder implements AdderInterface {
    public add(): void {
        const targetsList = document.querySelectorAll<HTMLElement>(
            conf.selectors.targetForCodeExamples,
        )
        const targets = Array.from(targetsList)

        if (!targets.length) {
            return
        }

        for (const target of targets) {
            const icon = `<div title="Copy to a clipboard" class="phpr-copy-button">${copyIcon}</div>`
            target.insertAdjacentHTML('afterbegin', icon)
        }

        this.listenForButtonClick(targets)
    }

    private listenForButtonClick(targets: HTMLElement[]): void {
        for (const target of targets) {
            const copyIcon = target.querySelector<HTMLElement>(
                conf.selectors.copyCodeButton,
            )

            if (!copyIcon) {
                continue
            }

            copyIcon.addEventListener('click', () => {
                const btn = target.querySelector<HTMLElement>('.phpr-copy-button')

                if (btn) {
                    this.copyCode(target, btn)
                }
            })
        }
    }

    private copyCode(target: HTMLElement, btn: HTMLElement): void {
        const tooltip = new Tooltip(btn)

        new CodeCopier(target)
            .copy()
            .then(() => tooltip.display('Copied!', true))
            .catch(err => {
                tooltip.display('Error!', false)
                err('Copy failed', err)
            })
    }
}
