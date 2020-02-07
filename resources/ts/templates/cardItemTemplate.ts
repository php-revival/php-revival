import CardItemInterface from "../interfaces/CardItemInterface"

export default (card: CardItemInterface): string => {
    return `
        <a href="${card.href}" class="revival-random-video">
            <img src="${card.src}" alt="${card.title}">
            <span>${card.title}}</span>
        </a>
    `
}