import type { RecommendedLink } from '@/types'

const recommendedLinks: RecommendedLink[] = [
    {
        href: 'https://github.com/php/php-src',
        iconName: 'github.png',
        title: 'PHP Source',
    },
    {
        href: 'https://x.com/official_php',
        iconName: 'x.svg',
        title: 'PHP Official',
    },
    {
        href: 'https://onlinephp.io/',
        iconName: 'onlinephp.png',
        title: 'PHP Sandbox',
    },
    {
        href: 'https://opencollective.com/phpfoundation',
        iconName: 'phpfoundation.png',
        title: 'PHP Foundation',
    },
    {
        href: 'https://hub.docker.com/_/php',
        iconName: 'docker.png',
        title: 'Official Docker Image',
    },
]

export default recommendedLinks