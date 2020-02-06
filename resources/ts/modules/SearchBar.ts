export default class {
    private searchBar: HTMLInputElement | null

    public constructor() {
        this.searchBar = document.querySelector<HTMLInputElement>('.search-query.tt-query')
    }

    public focusOnSearchBarOnHomePage(): this {
        if (!this.searchBar || window.location.pathname !== '/')
            return this

        this.searchBar.focus()

        return this
    }
}