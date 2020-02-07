import CardItemInterface from "../interfaces/CardItemInterface"

export default (card: CardItemInterface): string => {
    return `
        <a href="${card.link}" class="revival-random-video" target="_blank">
            <img src="${card.img}" alt="${card.title}">
            <span>${card.title}</span>
        </a>
    `
}