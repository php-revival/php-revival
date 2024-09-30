export type HomeLink = {
    href: string
    iconName: string
    title: string
    nestedList?: HTMLUListElement // ul > li > a
}

export enum VideoTag {
    All = 'all',
    Core = 'core',
    Laravel = 'laravel',
    Symfony = 'symfony',
}

export type RecommendedVideo = {
    title: string
    link: string
    img: string
    date: string
    tags: VideoTag[]
}
