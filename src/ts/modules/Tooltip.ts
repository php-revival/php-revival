const TOGGLE_CLASS = 'php-revival-button-tooltip--show'

export default class Tooltip {
    private tooltip: Element

    public constructor(private readonly target: Element) {
        this.tooltip = this.create()
    }

    public removeAfter(delay: number): void {
        setTimeout(() => {
            this.tooltip.classList.remove(TOGGLE_CLASS)
            setTimeout(() => this.tooltip.remove(), 300)
        }, delay)
    }

    public display(text: string, isSuccess: boolean): void {
        this.tooltip.textContent = text

        const extraClass = isSuccess
            ? 'php-revival-button-tooltip--green'
            : 'php-revival-button-tooltip--red'

        this.tooltip.classList.add(extraClass)

        setTimeout(() => {
            this.tooltip.classList.add(TOGGLE_CLASS)
            this.removeAfter(1000)
        }, 100)
    }

    public create(): Element {
        const tooltip = document.createElement('div')
        tooltip.classList.add('php-revival-button-tooltip')
        this.target.appendChild(tooltip)

        return tooltip
    }
}
