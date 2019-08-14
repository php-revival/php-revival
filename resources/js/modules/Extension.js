import PhpInfo from './PhpInfo'
import PhpCode from './PhpCode'
import FaviconIcon from './FaviconIcon'
import SearchBar from './SearchBar'

export default class {
    execute() {
        new SearchBar().focusOnSearchBarOnHomePage()
        new FaviconIcon().replaceWithCustomIcon()
        new PhpCode().beautifyPhpCodeExamples()
        new PhpInfo().applyStylesAndModifyTheInfo()
    }
}