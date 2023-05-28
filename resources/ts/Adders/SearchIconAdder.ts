import conf from '@/conf'
import AdderInterface from '@/Adders/Adder'
import searchIconTemplate from '@/templates/searchIconTemplate'

export default class implements AdderInterface {
    public add(): void {
        const target = document.querySelector(conf.selectors.targetForSearchIcon)

        if (!target) {
            return
        }

        target.insertAdjacentHTML('afterbegin', searchIconTemplate())
    }
}