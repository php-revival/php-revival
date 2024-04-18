import conf from '@/conf'
import AdderInterface from '@/Adders/Adder'
import searchIconTemplate from '@/templates/searchIconTemplate'

export default class SearchIconAdder implements AdderInterface {
    public add(): void {
        const target = document.querySelector(conf.selectors.targetForSearchIcon)

        if (!target) {
            console.error(`Could not find target for search icon: ${conf.selectors.targetForSearchIcon}`)
            return
        }

        target.insertAdjacentHTML('afterbegin', searchIconTemplate)
    }
}