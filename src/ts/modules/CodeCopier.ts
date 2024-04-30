export default class CodeCopier {
    private lastCopiedAt: number = 0

    public constructor(private readonly target: HTMLElement) {}

    public async copy(): Promise<string | null> {
        const code = this.target.querySelector<HTMLElement>('code')

        if (!code) {
            console.warn('[PHP Revival] Code element not found')
            return null
        }

        const cleanCode = this.cleanCode(code.innerHTML)

        return this.copyTextToClipboard(cleanCode, this.target)
    }

    private cleanCode(code: string): string {
        return code
            .replace(/<br ?\/?>/g, '\n') // Replace <br> and <br /> with new line
            .replace(/<[^>]*>/g, '') // Remove HTML tags
            .replace(/&lt;/g, '<') // Replace "&lt;" with "<"
            .replace(/&gt;/g, '>') // Replace "&gt;" with ">"
            .replace(/&amp;/g, '&') // Replace "&amp;" with "&"
    }

    private async copyTextToClipboard(
        text: string,
        target: HTMLElement,
    ): Promise<string | null> {
        if (this.notAllowedToCopy()) {
            return null
        }

        return new Promise<string>((resolve, reject) => {
            return navigator.clipboard
                .writeText(text)
                .then(() => resolve(text))
                .catch(err => reject(err))
                .finally(() => (this.lastCopiedAt = Date.now()))
        })
    }

    private notAllowedToCopy(): boolean {
        return Date.now() - this.lastCopiedAt < 1300
    }
}
