const isFirefox = typeof browser !== 'undefined'

if (isFirefox) {
    browser.browserAction.onClicked.addListener(function (tab) {
        browser.tabs.update(tab.id, { url: 'https://php.net' })
    })
} else {
    chrome.action.onClicked.addListener(function (tab) {
        chrome.tabs.update(tab.id, {
            url: 'https://php.net',
        })
    })
}
