import type { Modifier } from '@/types'
import { warn } from '@/modules/err'
import playIcon from '@/templates/icons/playIcon'
import isCaretInsideElem from '@/modules/isCaretInsideElem'
import Tooltip from '@/modules/Tooltip'

export default class RunCodeButtonModifier implements Modifier {
    public modify(): void {
        const selector = '.example-contents'
        const wrappers = document.querySelectorAll<HTMLDivElement>(selector)

        if (wrappers.length === 0) {
            return
        }

        for (const wrapper of wrappers) {
            const btn = wrapper.querySelector<HTMLButtonElement>(
                'button[type="button"]',
            )

            if (!btn) {
                continue
            }

            this.modifyButton(btn, wrapper)
            this.listenForKeyboardEvents(btn, wrapper)
        }
    }

    private modifyButton(btn: HTMLButtonElement, wrapper: HTMLDivElement): void {
        const codeBlock = wrapper.querySelector<HTMLElement>('.phpcode')

        if (!codeBlock) {
            warn('Code block not found. Cannot modify the "Run code" button')
            return
        }

        btn.innerHTML = playIcon
        btn.classList.add('phpr-run-button')

        codeBlock.appendChild(btn)

        btn.addEventListener('click', () => {
            new Tooltip(btn).display('Code executed below', true)
        })
    }

    private listenForKeyboardEvents(
        btn: HTMLButtonElement,
        wrapper: HTMLDivElement,
    ): void {
        wrapper.addEventListener('keydown', e => {
            if (!isCaretInsideElem(wrapper)) {
                return
            }

            // listen for command + enter or ctrl + enter
            if ((e.metaKey || e.ctrlKey) && e.key === 'Enter') {
                e.preventDefault()
                btn.click()
            }
        })
    }
}
