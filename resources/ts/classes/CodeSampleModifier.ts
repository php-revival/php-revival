import Modifier from "../abstract/Modifier"

export default class extends Modifier {
    public constructor(
        private codeAreas: NodeListOf<HTMLDivElement>,
        private staticClasses: NodeListOf<HTMLDivElement>
    ) {
        super()
    }

    public modify(): void {
        this.beautifyPhpCodeExamples()
        this.addColorToStaticClassCallInClassExamples()
    }

    private beautifyPhpCodeExamples(): void {
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
    }

    private addColorToStaticClassCallInClassExamples(): void {
        this.staticClasses.forEach(el => {
            let items = el.innerText.split('::')

            if (items.length === 2) {
                el.innerHTML = `<span class="code-orange">${items[0]}</span>::${items[1]}`
            }
        })
    }
}