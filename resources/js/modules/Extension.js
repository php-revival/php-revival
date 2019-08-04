export default class {
    constructor(config) {
        this.conf = config
    }

    execute() {
    }

    select(selector) {
        return document.querySelector(selector)
    }
}