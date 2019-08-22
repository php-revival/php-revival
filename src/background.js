var _browser = typeof browser === 'undefined' ? chrome : browser

_browser.browserAction.onClicked.addListener(function (tab) {
    _browser.tabs.update(tab.id, { url: 'https://php.net' })
})