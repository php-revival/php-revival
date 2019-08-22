import PhpInfo from './PhpInfo'
import PhpCode from './PhpCode'
import SearchBar from './SearchBar'

export default class {
    execute() {
        new SearchBar().focusOnSearchBarOnHomePage()
        new PhpCode().format()
        new PhpInfo().applyStylesAndModifyTheInfo()
    }
}