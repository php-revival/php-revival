const config = {
    selectors: {
        codeExamples: '.example-contents .phpcode code span span, #usernotes .note .text .phpcode code span.html span',
        searchQuery: '.search-query.tt-query',
        targetForSearchIcon: '#topsearch',
        targetForCodeExamples: '.example-contents > .phpcode',
        copyCodeIcons: '.php-revival-copy-icon',
        playCodeIcons: '.php-revival-play-icon',
        docs: {
            classMethods: '.partintro .classsynopsis .methodname .methodname',
            contributeModal: 'body.docs .contribute',
            contributeModalLinks: 'body.docs .contribute .edit-bug',
        },
        home: {
            hero: 'body.home .hero',
            logo: 'body.home img.hero-logo',
            targetForHomeLinks: '.tips > .inner > .panel',
            targetForRandVideos: 'body.home .tips .inner',
        },
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
    sandboxURL: 'https://onlinephp.io/',
}

export default config
