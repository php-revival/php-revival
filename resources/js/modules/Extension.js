import PhpInfo from './PhpInfo'
import PhpCode from './PhpCode'
import FaviconIcon from './FaviconIcon'
import SearchBar from './SearchBar'
import Comments from './Comments';

export default class {
    execute() {
        new SearchBar().focusOnSearchBarOnHomePage()
        new FaviconIcon().replaceWithCustomIcon()
        new PhpCode().format()
        new PhpInfo().applyStylesAndModifyTheInfo()
        new Comments().applyChange()
    }
}