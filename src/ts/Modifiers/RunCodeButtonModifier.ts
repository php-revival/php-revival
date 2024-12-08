import type { Modifier } from '@/types'
import { warn } from '@/modules/err'
import playIcon from '@/templates/icons/playIcon'

export default class RunCodeButtonModifier implements Modifier {
    public modify(): void {
        // select parents of the "Run code" buttons
        const wrappers = document.querySelectorAll<HTMLDivElement>(
            '.example .example-contents',
        )

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
        }
    }

    private modifyButton(btn: HTMLButtonElement, wrapper: HTMLDivElement): void {
        const codeBlock = wrapper.querySelector<HTMLElement>('.phpcode')

        if (!codeBlock) {
            warn('Code block not found. Cannot modify the "Run code" button')
            return
        }

        btn.innerHTML = playIcon
        btn.classList.add('php-revival-run-button')

        codeBlock.appendChild(btn)
    }
}
