import CardItemInterface from "../interfaces/CardItemInterface"
import conf from "../conf"

export default (card: CardItemInterface): string => {
    return `
        <a href="${card.link}" class="revival-random-video" target="_blank">
            <img src="${conf.urls.server}${card.img}" alt="${card.title}">
            <span>${card.title}</span>
        </a>
    `
}