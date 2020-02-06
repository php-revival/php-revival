var phpRevival = typeof browser === 'undefined' ? chrome : browser

phpRevival.browserAction.onClicked.addListener(function (tab) {
    phpRevival.tabs.update(tab.id, { url: 'https://php.net' })
})