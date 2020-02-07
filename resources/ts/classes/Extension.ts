import CodeSampleModifier from "./CodeSampleModifier";
import PhpVersionModifier from "./PhpVersionModifier";
import conf from "../config";
import Modifier from "../abstract/Modifier";

export default class {
    public static focusOnTheSearchBarOnHomePage(): void {
        const searchBar = document.querySelector<HTMLInputElement>('.search-query.tt-query')

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
            new PhpVersionModifier(phpVersion),
        ]

        modifiers.forEach(modifier => modifier.modify())
    }
}