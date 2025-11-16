const MAIN_CLASS = 'phpr-tooltip'
const RED_CLASS = 'phpr-tooltip--red'
const GREEN_CLASS = 'phpr-tooltip--green'
const TOGGLE_CLASS = 'phpr-tooltip--show'
const REMOVE_AFTER = 1000

export default class Tooltip {
    private tooltip: Element

    public constructor(private readonly target: Element) {
        this.tooltip = this.create()
    }

    public removeAfter(): void {
        setTimeout(() => {
            this.tooltip.classList.remove(TOGGLE_CLASS)
            setTimeout(() => this.tooltip.remove(), 300)
        }, REMOVE_AFTER)
    }

    public display(text: string, isSuccess: boolean): void {
        this.tooltip.setAttribute('data-text', text)
        this.tooltip.classList.add(isSuccess ? GREEN_CLASS : RED_CLASS)

        setTimeout(() => {
            this.tooltip.classList.add(TOGGLE_CLASS)
            this.removeAfter()
        }, 100)
    }

    public create(): Element {
        const tooltip = document.createElement('div')
        tooltip.classList.add(MAIN_CLASS)
        this.target.appendChild(tooltip)

        return tooltip
    }
}
