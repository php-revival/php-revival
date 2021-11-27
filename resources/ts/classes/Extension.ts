import CodeSampleModifier from "./CodeSampleModifier"
import conf from "../conf"
import Modifier from "../abstract/Modifier"
import RandomVideoAdder from "./Adders/RandomVideoAdder"
import Adder from "../abstract/Adder"
import HomeLinksAdder from './Adders/HomeLinksAdder'

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

        if (!codeAreas || !staticClasses || !phpVersion) return

        const modifiers: Array<Modifier> = [
            new CodeSampleModifier(codeAreas, staticClasses),
        ]

        modifiers.forEach(modifier => modifier.modify())
    }

    public static applyHomePageAdders(): void {
        const panel = document.querySelector<HTMLDivElement>(conf.selectors.targetForRandVideos)

        if (!panel || window.location.pathname !== '/') return

        const adders: Array<Adder> = [
            new RandomVideoAdder(panel),
            new HomeLinksAdder(),
        ]

        adders.forEach(adder => adder.injectContent())
    }
}