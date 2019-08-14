import conf from '../config'

export default class {
    constructor() {
        this.names = document.querySelectorAll(conf.selectors.commentUserNames)
    }

    applyChange() {
        this.names.forEach(name => {
            name.innerText = name.innerText
                .replace(/\s?(dot|DOT)\s([a-z]+)/, '.$2')
                .replace(/\s?(at|AT)\s?/, '@')
                .replace(/\s/, '-')
        });
    }
}