const phpRevival = typeof browser === 'undefined' ? chrome : browser

phpRevival.action.onClicked.addListener(function (tab) {
    phpRevival.tabs.update(tab.id, {
        url: 'https://php.net',
    })
})