const config = {
    selectors: {
        codeExamples:
            '.example-contents .phpcode code span span, #usernotes .note .text .phpcode code span.html span',
        searchQuery: '.search-query.tt-query',
        rightNavbar: '.navbar .navbar__right',
        targetForCodeExamples: '.example-contents > .phpcode',
        copyCodeButton: '.phpr-copy-button',
        sandboxCodeButton: '.phpr-sandbox-button',
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
            rightSidebar: 'body.home .tips',
        },
    },
    sandboxURL: 'https://onlinephp.io/',
    events: {
        videoTagSelected: 'SNwx9SHZLRdGXnx',
    },
    storage: {
        theme: 'phpr-theme',
    },
}

export default config
