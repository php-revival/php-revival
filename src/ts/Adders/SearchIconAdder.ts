import conf from '@/conf'
import AdderInterface from '@/Adders/Adder'
import searchIcon from '@/templates/icons/searchIcon'

export default class SearchIconAdder implements AdderInterface {
    public add(): void {
        const target = document.querySelector(conf.selectors.targetForSearchIcon)

        if (!target) {
            const msg = `Could not find target for search icon: ${conf.selectors.targetForSearchIcon}`
            console.warn(`[PHP Revival]: ${msg}`)
            return
        }

        target.insertAdjacentHTML('afterbegin', searchIcon)
    }
}
