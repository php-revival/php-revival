export default class {
    constructor() {
        this.searchBar = document.querySelector('.search-query.tt-query')
    }

    focusOnSearchBarOnHomePage() {
        if (!this.searchBar || window.location.pathname !== '/')
            return this

        this.searchBar.focus()

        return this
    }
}