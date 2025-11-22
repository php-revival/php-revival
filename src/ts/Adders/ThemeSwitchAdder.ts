import type Adder from '@/Adders/Adder'
import conf from '@/conf'
import getImageUrl from '@/modules/getImageUrl'
import { warn } from '@/modules/err'
import { ThemeState } from '@/types'
import ThemeChanger from '@/modules/ThemeChanger'

const SWITCH_BTN_ID = 'theme-switch-btn'

/**
 * Adds light/dark/auto theme switch to the end of the navbar.
 * You click on the icon to switch the theme.
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
        btn.addEventListener('click', this.toggleTheme.bind(this))

        this.target.appendChild(btn)
        this.setInitialSwitchState()
    }

    private switchTo(theme: ThemeState): void {
        const switcher = document.getElementById(SWITCH_BTN_ID) as HTMLButtonElement

        if (!switcher) {
            warn(`Theme switch with ID ${SWITCH_BTN_ID} doesn't exist`)
            return
        }

        localStorage.setItem(conf.storage.theme, theme)

        switcher.setAttribute('class', '')
        switcher.classList.add(`theme-switch-${theme}`)

        new ThemeChanger().setClassOnBody()
    }

    private toggleTheme(_: MouseEvent): void {
        const currTheme = localStorage.getItem(conf.storage.theme)

        if (!currTheme || currTheme === ThemeState.Light) {
            this.switchTo(ThemeState.Dark)
            return
        }

        const isDark = currTheme === ThemeState.Dark

        this.switchTo(isDark ? ThemeState.Auto : ThemeState.Light)
    }

    private setInitialSwitchState(): void {
        const switcher = document.getElementById(SWITCH_BTN_ID) as HTMLButtonElement

        if (!switcher) {
            warn(`Theme switch with ID ${SWITCH_BTN_ID} doesn't exist`)
            return
        }

        const currTheme = localStorage.getItem(conf.storage.theme)

        switcher.classList.add(`theme-switch-${currTheme || 'auto'}`)
    }
}
