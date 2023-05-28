import type Animation from '@/Animations/Animation'
import conf from '@/conf'

export default class implements Animation {
    private logoPosition = {
        x: 0,
        y: 0,
    }

    public animate(): void {
        const logo = document.querySelector<HTMLImageElement>(conf.selectors.homeLogo)

        if (!logo) {
            return
        }

        this.logoPosition.x = logo.offsetLeft
        this.logoPosition.y = logo.offsetTop

        console.log(this.logoPosition)

        document.addEventListener('mousemove', e => this.animateLogo(e, logo))
    }

    private animateLogo(e: MouseEvent, logo: HTMLImageElement): void {
        const x = e.clientX - this.logoPosition.x
        const y = e.clientY - this.logoPosition.y

        const xDeg = x / 60
        const yDeg = y / 60

        logo.style.transform = `rotateX(${yDeg}deg) rotateY(${xDeg}deg)`
    }
}