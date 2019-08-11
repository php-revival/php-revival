import conf from '../config'
import PhpInfo from './PhpInfo'

export default class {
    execute() {
       this.changeFavicon()
            .focusOnSearchBar()
            .beautifyPhpCodeExamples()

        new PhpInfo().animatePhpVersionAppearing()
    }


    beautifyPhpCodeExamples() {
        const codeAreas = document.querySelectorAll(conf.selectors.codeExamples)

        codeAreas.forEach(area => {
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

    focusOnSearchBar() {
        if (window.location.pathname === '/')
            document.querySelector('.search-query.tt-query').focus()
        
        return this
    }

    changeFavicon() {
        let link = document.createElement('link')

        link.rel = 'shortcut icon'
        link.href = conf.faviconSrc

        document.head.appendChild(link);

        return this
    }
}