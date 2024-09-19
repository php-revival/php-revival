import type { HomeLink } from '@/types'

const recommendedLinks: HomeLink[] = [
    {
        href: 'https://github.com/php/php-src',
        iconName: 'github.png',
        title: 'PHP Source',
    },
    {
        href: 'https://onlinephp.io/',
        iconName: 'onlinephp.png',
        title: 'PHP Sandbox',
    },
    {
        href: 'https://hub.docker.com/_/php',
        iconName: 'docker.png',
        title: 'Official Docker Image',
    },
]

export default recommendedLinks
