import conf from '@/conf'
import AdderInterface from '@/Adders/Adder'
import searchIcon from '@/templates/icons/searchIcon'

export default class SearchIconAdder implements AdderInterface {
    public add(): void {
        const target = document.querySelector(conf.selectors.targetForSearchIcon)

        if (!target) {
            console.warn(
                `[PHP Revival]: Could not find target for search icon: ${conf.selectors.targetForSearchIcon}`,
            )
            return
        }

        target.insertAdjacentHTML('afterbegin', searchIcon)
    }
}
