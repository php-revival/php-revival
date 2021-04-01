import ConfigInterface from "./interfaces/ConfigInterface"

const config: ConfigInterface = {
    selectors: {
        codeExamples: '.example-contents .phpcode code span span, #usernotes .note .text .phpcode code span.html span',
        phpVersionInfo: '#layout-content .refnamediv .verinfo',
        classMethods: '.partintro .classsynopsis .methodname .methodname',
        searchQuery: '.search-query.tt-query',
        targetForRandVideos: 'body.home .tips .inner',
        targetForHomeLinks: '.tips .inner',
    },
    urls: {
        server: 'https://serhiicho.github.io/php-revival-api/',
        phpSandbox: 'https://phpsandbox.io/',
        randomVideos: 'random-videos.json',
    },
}

export default config