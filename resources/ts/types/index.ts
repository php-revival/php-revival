export type HomeLink = {
    link: string
    iconName: string
    title: string
}

export type Config = {
    selectors: {
        [key: string]: string
    },
    urls: {
        [key: string]: string
    },
    homeLinks: HomeLink[]
}

export type RandomVideo = {
    title: string
    link: string
    img: string
}