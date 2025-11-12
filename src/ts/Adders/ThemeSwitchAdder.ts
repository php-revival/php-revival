import type Adder from '@/Adders/Adder'
import conf from '@/conf'
import getImageUrl from '@/modules/getImageUrl'
import { warn } from '@/modules/err'
import { ThemeSwitch } from '@/types'

const THEME_SWITCH_BTN_ID = 'theme-switch-btn'

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
        btn.id = THEME_SWITCH_BTN_ID
        btn.style.background = `url(${getImageUrl('icons/theme-switch-sprite.png')})`

        this.target.appendChild(btn)
    }
}
