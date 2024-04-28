import AdderInterface from '@/Adders/Adder'

export default class BrowserTypeAdder implements AdderInterface {
    public add(): void {
        let insertClass = 'is-chrome'

        if (navigator.userAgent.indexOf('Firefox') !== -1) {
            insertClass = 'is-firefox'
        }

        document.body.classList.add(insertClass)
    }
}