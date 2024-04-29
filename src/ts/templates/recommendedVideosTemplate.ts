import type { RecommendedVideo } from '@/types'
import recommendedVideoTemplate from '@/templates/recommendedVideoTemplate'

export default (cards: RecommendedVideo[]): Element[] => {
    const elements: Element[] = []

    for (const card of cards) {
        elements.push(recommendedVideoTemplate(card))
    }

    return elements
}