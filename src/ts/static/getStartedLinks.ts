import type { HomeLink } from '@/types'

const getStartedLinks: HomeLink[] = [
    {
        title: 'Install Composer',
        href: 'https://getcomposer.org/',
        iconName: 'composer.png',
    },
    {
        title: 'Laravel Docs',
        href: 'https://laravel.com/',
        iconName: 'laravel.png',
    },
    {
        title: 'Symfony Docs',
        href: 'https://symfony.com/',
        iconName: 'symfony.png',
    },
    {
        href: 'https://hub.docker.com/_/php',
        iconName: 'docker.png',
        title: 'Official Docker Image',
    },
]

export default getStartedLinks
