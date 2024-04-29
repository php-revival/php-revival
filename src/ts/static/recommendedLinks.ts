import type { RecommendedLink } from '@/types'

const recommendedLinks: RecommendedLink[] = [
    {
        link: 'https://github.com/php/php-src',
        iconName: 'github.png',
        title: 'PHP Source',
    },
    {
        link: 'https://x.com/official_php',
        iconName: 'x.svg',
        title: 'PHP Official',
    },
    {
        link: 'https://onlinephp.io/',
        iconName: 'onlinephp.png',
        title: 'PHP Sandbox',
    },
    {
        link: 'https://opencollective.com/phpfoundation',
        iconName: 'phpfoundation.png',
        title: 'PHP Foundation',
    },
    {
        link: 'https://hub.docker.com/_/php',
        iconName: 'docker.png',
        title: 'Official Docker Image',
    },
]

export default recommendedLinks