import conf from '../config'

export default class {
    constructor() {
        this.codeAreas = document.querySelectorAll(conf.selectors.codeExamples)
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
}