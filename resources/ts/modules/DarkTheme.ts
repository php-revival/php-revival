type ThemeState = 'dark' | 'light' | 'system'

export default class {
    public constructor(private buttonId: string) {
    }

    public init() {
        const btn = document.getElementById(this.buttonId) as HTMLButtonElement | null

        if (!btn) {
            console.error(`Could not find button with id ${this.buttonId}`)
            return
        }

        btn.addEventListener('click', this.showDropdown)
    }

    private showDropdown(): void {
        console.log('show dropdown')
    }

    private isThemeActive(state: ThemeState): boolean {
        return document.body.classList.contains(state + '-theme')
    }

    private setTheme(state: ThemeState): void {
        document.body.classList.add('dark-theme')
        localStorage.setItem(state + '-theme', '1')
    }

    private removeTheme(state: ThemeState): void {
        document.body.classList.remove(state + '-theme')
        localStorage.removeItem(state + '-theme')
    }
}