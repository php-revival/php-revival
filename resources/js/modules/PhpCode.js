import conf from '../config'

export default class {
    constructor() {
        this.codeAreas = document.querySelectorAll(conf.selectors.codeExamples)
        this.staticClasses = document.querySelectorAll(conf.selectors.classMethods)
    }

    format() {
        this.beautifyPhpCodeExamples()
        this.addColorToStaticClassCallInClassExamples()
    }

    beautifyPhpCodeExamples() {
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

    addColorToStaticClassCallInClassExamples() {
        if (!this.staticClasses) return this

        this.staticClasses.forEach(el => {
            let items = el.innerText.split('::')

            if (items.length === 2) {
                el.innerHTML = `<span class="code-orange">${items[0]}</span>::${items[1]}`
            }
        })
    }
}