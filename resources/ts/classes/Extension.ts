import PhpCode from "./PhpCode";
import PhpInfo from "./PhpInfo";
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
            new PhpCode(codeAreas, staticClasses).format()
    }

    public static modifyFunctionsPage(): void {
        new PhpInfo().applyStylesAndModifyTheInfo()
    }
}