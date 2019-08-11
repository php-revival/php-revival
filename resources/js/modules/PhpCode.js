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
                .replace('&lt;?php<br><br>', '&lt;?php<br>')
                .replace('&lt;?php<br>', '&lt;?php<br><br>')
                .replace(/([;]+)<br>([a-z\/])/, ';<br><br>$2')
                .replace(/function\(/, 'function (')

            area.innerHTML = newHtml
        })

        return this
    }
}