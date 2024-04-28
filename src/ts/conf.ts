const config = {
    selectors: {
        codeExamples: '.example-contents .phpcode code span span, #usernotes .note .text .phpcode code span.html span',
        searchQuery: '.search-query.tt-query',
        targetForSearchIcon: '#topsearch',
        targetForCodeExamples: '.example-contents > .phpcode',
        copyCodeIcons: '.php-revival-copy-icon',
        playCodeIcons: '.php-revival-play-icon',
        bread: {
            next: '#breadcrumbs-inner .next',
            prev: '#breadcrumbs-inner .prev',
        },
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
            title: 'PHP Source',
        },
        {
            link: 'https://x.com/official_php',
            iconName: 'x.svg',
            title: 'PHP Official',
        },
        {
            link: 'https://onlinephp.io/',
            iconName: 'onlinephp.png',
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
            title: 'Official Docker Image',
        },
    ],
    sandboxURL: 'https://onlinephp.io/',
}

export default config
