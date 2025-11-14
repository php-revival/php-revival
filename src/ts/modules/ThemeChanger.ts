import conf from '@/conf'
import { isSystemDark } from '@/modules'
import { ThemeState } from '@/types'

/**
 * Sets CSS `dark` class on HTML tag to help CSS handle colors correctly.
 */
export default class ThemeChanger {
    public setClassOnBody(): void {
        const currTheme = localStorage.getItem(conf.storage.theme)

        if (!currTheme || currTheme === ThemeState.Auto) {
            this.handleAutoState()
            return
        }

        if (currTheme === ThemeState.Dark) {
            this.setDark()
            return
        }

        this.removeDark()
    }

    public listenForSystemThemeSwitch(): void {
        window
            .matchMedia('(prefers-color-scheme: dark)')
            .addEventListener('change', this.setClassOnBody.bind(this))
    }

    private handleAutoState(): void {
        if (isSystemDark()) {
            this.setDark()
            return
        }

        this.removeDark()
    }

    private setDark(): void {
        document.body.classList.add(ThemeState.Dark)
    }

    private removeDark(): void {
        document.body.classList.remove(ThemeState.Dark)
    }
}
