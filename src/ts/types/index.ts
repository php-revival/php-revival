export type HomeLink = {
    href: string
    iconName: string
    title: string
    nestedList?: HTMLUListElement // ul > li > a
}

export enum VideoTag {
    All = 'all',
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

export interface Modifier {
    modify: () => void
}

export enum ThemeSwitch {
    Light = 'light',
    Dark = 'dark',
    Auto = 'auto',
}
