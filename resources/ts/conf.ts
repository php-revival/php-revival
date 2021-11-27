import ConfigInterface from './interfaces/ConfigInterface'

const config: ConfigInterface = {
    selectors: {
        codeExamples: '.example-contents .phpcode code span span, #usernotes .note .text .phpcode code span.html span',
        phpVersionInfo: '#layout-content .refnamediv .verinfo',
        classMethods: '.partintro .classsynopsis .methodname .methodname',
        searchQuery: '.search-query.tt-query',
        targetForRandVideos: 'body.home .tips .inner',
        targetForHomeLinks: '.tips > .inner > .panel',
        targetForSearchIcon: '#topsearch',
    },
    urls: {
        server: 'https://serhiicho.github.io/php-revival-api/',
        randomVideos: 'random-videos.json',
    },
    homeLinks: [
        {
            link: 'https://phpsandbox.io/',
            iconName: 'sandbox.png',
            title: 'PHP Sandbox',
        },
        {
            link: 'https://opencollective.com/phpfoundation',
            iconName: 'phpfoundation.png',
            title: 'PHP Foundation',
        },
        {
            link: 'https://twitter.com/official_php',
            iconName: 'twitter.png',
            title: 'Twitter',
        },
    ],
}

export default config