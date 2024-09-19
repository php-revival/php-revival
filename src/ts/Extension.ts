import type Adder from '@/Adders/Adder'
import type Modifier from '@/Modifiers/Modifier'

export default class {
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
