import conf from '../config'

export default class {
    private codeAreas: NodeListOf<HTMLDivElement>
    private staticClasses: NodeListOf<HTMLDivElement>

    public constructor() {
        this.codeAreas = document.querySelectorAll<HTMLDivElement>(conf.selectors.codeExamples)
        this.staticClasses = document.querySelectorAll<HTMLDivElement>(conf.selectors.classMethods)
    }

    public format(): void {
        this.beautifyPhpCodeExamples()
        this.addColorToStaticClassCallInClassExamples()
    }

    private beautifyPhpCodeExamples(): this {
        if (!this.codeAreas) return this

        this.codeAreas.forEach(area => {
            let oldHtml = area.innerHTML
            let newHtml = oldHtml
                .replace('&lt;?PHP', '&lt;?php')
                .replace(/\}<br>(\w|\$)/, '}<br><br>$1')
                .replace(/([;]+)<br>([a-z\/])/, ';<br><br>$2')
                .replace(/function\(/, 'function (')
                .replace(/([;}])<br>([&nbsp;\s]+ (if|while|foreach|for|which))/, '$1<br><br>$2')
                .replace(/(if|while|foreach|for|which)\(/, '$1 (')

            area.innerHTML = newHtml
        })

        return this
    }

    private addColorToStaticClassCallInClassExamples(): void {
        if (!this.staticClasses) return

        this.staticClasses.forEach(el => {
            let items = el.innerText.split('::')

            if (items.length === 2) {
                el.innerHTML = `<span class="code-orange">${items[0]}</span>::${items[1]}`
            }
        })
    }
}