import type Adder from '@/Adders/Adder'
import type { Modifier } from '@/types'
import ThemeChanger from '@/modules/ThemeChanger'

export default class {
    public constructor() {
        // const themeSwitcher = new ThemeChanger()
        // themeSwitcher.setClassOnBody()
        // themeSwitcher.listenForSystemThemeSwitch()
    }

    /**
     * Adders are classes that add (insert) elements to the page.
     * Things like links, buttons, etc.
     */
    public applyAdders(adders: Adder[]): this {
        adders.forEach(adder => adder.add())
        return this
    }

    /**
     * Modifiers are classes that modify elements on the page.
     * Things like changing the logo, fixing styles, etc.
     */
    public applyModifiers(modifiers: Modifier[]): this {
        modifiers.forEach(modifier => modifier.modify())
        return this
    }
}
