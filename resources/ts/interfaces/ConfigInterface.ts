import HomeLink from './HomeLink'

export default interface ConfigInterface {
    selectors: {
        [key: string]: string
    },
    urls: {
        [key: string]: string
    },
    homeLinks: HomeLink[]
}