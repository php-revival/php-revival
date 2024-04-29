import type { RecommendedVideo } from '@/types'
import cardItemTemplate from '@/templates/cardItemTemplate'

export default (cards: RecommendedVideo[]): Element[] => {
    const elements: Element[] = []

    for (const card of cards) {
        elements.push(cardItemTemplate(card))
    }

    return elements
}