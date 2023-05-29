import type { RandomVideo } from '@/types'
import cardItemTemplate from '@/templates/cardItemTemplate'

export default (cards: RandomVideo[], wrap: boolean): string => {
    let result = wrap ? '<div class="revival-random-video-container">' : ''

    cards.forEach(card => result += cardItemTemplate(card))

    result += wrap ? `<button type="button" id="revival-show-more-random">Show more</button></div>` : ''

    return result
}