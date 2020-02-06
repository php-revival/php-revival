import CodeSampleModifier from "./CodeSampleModifier";
import PhpVersionModifier from "./PhpVersionModifier";
import conf from "../config";

export default class {
    public static focusOnTheSearchBarOnHomePage(): void {
        const searchBar = document.querySelector<HTMLInputElement>('.search-query.tt-query')

        if (searchBar && window.location.pathname === '/')
            searchBar.focus()
    }

    public static formatPhpCodeExamples(): void {
        const codeAreas = document.querySelectorAll<HTMLDivElement>(conf.selectors.codeExamples)
        const staticClasses = document.querySelectorAll<HTMLDivElement>(conf.selectors.classMethods)

        if (codeAreas && staticClasses)
            new CodeSampleModifier(codeAreas, staticClasses).modify()
    }

    public static modifyFunctionsPage(): void {
        const phpVersion = document.querySelector<HTMLParagraphElement>(conf.selectors.phpVersionInfo)

        if (phpVersion)
            new PhpVersionModifier(phpVersion).modify()
    }
}