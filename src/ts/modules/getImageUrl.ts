export default (uri: string): string => {
    return chrome.runtime.getURL(`images/${uri}`)
}