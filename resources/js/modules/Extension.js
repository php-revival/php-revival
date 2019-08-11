import conf from '../config'
import PhpInfo from './PhpInfo'
import PhpCode from './PhpCode'

export default class {
    execute() {
       this.changeFavicon()
            .focusOnSearchBar()

        new PhpCode().beautifyPhpCodeExamples()
        new PhpInfo().animatePhpVersionAppearing()
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