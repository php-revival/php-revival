import conf from '@/conf'
import AdderInterface from '@/Adders/Adder'
import copyIconTemplate from '@/templates/copyIconTemplate'

export default class CopyButtonAdder implements AdderInterface {
    public add(): void {
        const targets = document.querySelectorAll<HTMLElement>(conf.selectors.targetForCodeExamples)

        targets.forEach((target: HTMLElement) => {
            target.insertAdjacentHTML('afterbegin', copyIconTemplate)
        })
    }
}