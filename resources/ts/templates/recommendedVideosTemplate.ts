import type { RecommendedVideo } from '@/types'
import cardItemTemplate from '@/templates/cardItemTemplate'

export default (cards: RecommendedVideo[], wrap: boolean): string => {
    let result = wrap ? '<div class="revival-recommended-video-container">' : ''

    cards.forEach(card => result += cardItemTemplate(card))

    result += wrap ? `<button type="button" id="revival-show-more-recommended">Show more</button></div>` : ''

    return result
}