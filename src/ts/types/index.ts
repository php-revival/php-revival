export type HomeLink = {
    href: string
    iconName: string
    title: string
    nestedList?: HTMLUListElement // ul > li > a
}

export type RecommendedVideo = {
    title: string
    link: string
    img: string
    date: string
}
