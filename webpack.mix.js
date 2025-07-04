let mix = require('laravel-mix')

mix.sass('src/sass/app.sass', 'extension/main.css')
    .ts('src/ts/app.ts', 'extension/main.js')
    .options({
        processCssUrls: false,
        uglify: {
            uglifyOptions: {
                compress: {
                    drop_console: true,
                },
            },
        },
    })
    .disableNotifications()
    .alias({
        '@': '/src/ts',
    })
