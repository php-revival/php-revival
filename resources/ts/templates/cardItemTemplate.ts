import CardItemInterface from '../interfaces/CardItemInterface'
import browser from '../browser'

export default (card: CardItemInterface): string => {
    return `
        <a href="${card.link}" class="revival-random-video" target="_blank">
            <img src="${browser.extension.getURL(card.img)}" alt="${card.title}">
            <span>${card.title}</span>
        </a>
    `
}