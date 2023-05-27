import CodeSampleModifier from '@/classes/CodeSampleModifier'
import Modifier from '@/abstract/Modifier'
import RandomVideoAdder from '@/classes/Adders/RandomVideoAdder'
import Adder from "@/abstract/Adder"
import HomeLinksAdder from '@/classes/Adders/HomeLinksAdder'
import SearchIconAdder from '@/classes/Adders/SearchIconAdder'
import conf from '@/conf'

export default class {
    public static focusOnTheSearchBarOnHomePage(): void {
        const searchBar = document.querySelector<HTMLInputElement>(conf.selectors.searchQuery)

        if (searchBar && window.location.pathname === '/')
            searchBar.focus()
    }

    public static applyFunctionPageModifiers(): void {
        const codeAreas = document.querySelectorAll<HTMLDivElement>(conf.selectors.codeExamples)
        const staticClasses = document.querySelectorAll<HTMLDivElement>(conf.selectors.classMethods)
        const phpVersion = document.querySelector<HTMLParagraphElement>(conf.selectors.phpVersionInfo)

        if (!codeAreas || !staticClasses || !phpVersion)
            return

        const modifiers: Array<Modifier> = [
            new CodeSampleModifier(codeAreas, staticClasses),
        ]

        for (const modifier of modifiers)
            modifier.modify()
    }

    public static applyHomePageAdders(): void {
        const adders: Array<Adder> = [
            new RandomVideoAdder(),
            new HomeLinksAdder(),
            new SearchIconAdder(),
        ]

        for (const adder of adders)
            adder.injectContent()
    }
}