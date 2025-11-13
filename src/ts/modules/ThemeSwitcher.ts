import conf from '@/conf'
import { isSystemDark } from '@/modules'
import { ThemeState } from '@/types'

/**
 * Sets CSS `dark` class on HTML tag to help CSS handle colors correctly.
 */
export default class ThemeSwitcher {
    public setClassOnBody(): void {
        const currTheme = localStorage.getItem(conf.storage.theme)

        if (!currTheme || currTheme === ThemeState.Light) {
            document.body.classList.remove(ThemeState.Dark)
            return
        }

        if (currTheme === ThemeState.Dark) {
            document.body.classList.add(ThemeState.Dark)
            return
        }

        if (isSystemDark()) {
            document.body.classList.add(ThemeState.Dark)
            return
        }

        document.body.classList.remove(ThemeState.Dark)
    }
}
