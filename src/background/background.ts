import ThemeChanger from '@/modules/ThemeChanger'

const themeSwitcher = new ThemeChanger()
themeSwitcher.setClassOnBody()
themeSwitcher.listenForSystemThemeSwitch()

const isFirefox = typeof browser !== 'undefined'

if (isFirefox) {
    browser.browserAction.onClicked.addListener(function (tab) {
        if (!tab.id) {
            return
        }

        browser.tabs.update(tab.id, { url: 'https://php.net' })
    })
} else {
    chrome.action.onClicked.addListener(function (tab) {
        if (!tab.id) {
            return
        }

        chrome.tabs.update(tab.id, { url: 'https://php.net' })
    })
}
