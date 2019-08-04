browser.browserAction.onClicked.addListener(tab => {
    browser.tabs.update(tab.id, { url: 'https://php.net' })
});