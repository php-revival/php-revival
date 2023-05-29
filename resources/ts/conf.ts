const config = {
    selectors: {
        codeExamples: '.example-contents .phpcode code span span, #usernotes .note .text .phpcode code span.html span',
        phpVersionInfo: '#layout-content .refnamediv .verinfo',
        classMethods: '.partintro .classsynopsis .methodname .methodname',
        searchQuery: '.search-query.tt-query',
        targetForSearchIcon: '#topsearch',
        home: {
            hero: '.home .hero',
            logo: '.home img.hero-logo',
            targetForHomeLinks: '.tips > .inner > .panel',
            targetForRandVideos: 'body.home .tips .inner',
        },
    },
    urls: {
        server: 'https://serhiicho.github.io/php-revival-api/',
        randomVideos: 'random-videos.json',
    },
    homeLinks: [
        {
            link: 'https://github.com/php/php-src',
            iconName: 'github.png',
            title: 'GitHub',
        },
        {
            link: 'https://twitter.com/official_php',
            iconName: 'twitter.png',
            title: 'Twitter',
        },
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
            link: 'https://hub.docker.com/_/php',
            iconName: 'docker.png',
            title: 'Docker image',
        },
    ],
}

export default config