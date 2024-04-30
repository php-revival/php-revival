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
            layoutContent: '#layout-content',
        },
        home: {
            hero: 'body.home .hero',
            logo: 'body.home img.hero-logo',
            rightSidebar: 'body.home .tips',
        },
    },
    sandboxURL: 'https://onlinephp.io/',
}

export default config
