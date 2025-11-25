let mix = require('laravel-mix')

mix.sass('src/sass/app.sass', 'public/main.css')
    .ts('src/ts/app.ts', 'public/main.js')
    .ts('src/background/background.ts', 'public/background.js')
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
    .webpackConfig({
        stats: {
            children: true,
        },
    })
    .alias({
        '@': '/src/ts',
    })
    .override(config => {
        if (config.entry['background']) {
            config.target = 'node'
        }
    })
