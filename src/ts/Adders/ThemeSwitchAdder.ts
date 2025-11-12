import type Adder from '@/Adders/Adder'
import conf from '@/conf'
import getImageUrl from '@/modules/getImageUrl'
import { warn } from '@/modules/err'
import { ThemeSwitch } from '@/types'

const SWITCH_BTN_ID = 'theme-switch-btn'

/**
 * Adds light/dark theme switch to the end of the navbar
 */
export default class ThemeSwitchAdder implements Adder {
    private readonly target: HTMLElement | null

    public constructor() {
        this.target = document.querySelector(conf.selectors.rightNavbar)
    }

    public add(): void {
        if (!this.target) {
            warn('Cannot insert theme switch. Target element not found')
            return
        }

        const btn = document.createElement('button')
        btn.id = SWITCH_BTN_ID
        btn.style.background = `url(${getImageUrl('icons/theme-switch-sprite.png')})`
        btn.addEventListener('click', this.addButtonClickListener.bind(this))

        this.target.appendChild(btn)
    }

    private switchTo(theme: ThemeSwitch): void {
        const switcher = document.getElementById(SWITCH_BTN_ID) as HTMLButtonElement

        if (!switcher) {
            warn(`Theme switch with ID ${SWITCH_BTN_ID} doesn't exist`)
            return
        }

        switcher.setAttribute('class', '')
        switcher.classList.add(`theme-switch-${theme}`)
    }

    private addButtonClickListener(e: MouseEvent): void {
        const btn = e.target as HTMLButtonElement
        const isLight = btn.classList.contains('theme-switch-light')

        if (isLight || btn.classList.length === 0) {
            this.switchTo(ThemeSwitch.Dark)
            return
        }

        const isDark = btn.classList.contains('theme-switch-dark')

        this.switchTo(isDark ? ThemeSwitch.Auto : ThemeSwitch.Light)
    }
}
