let mix = require('laravel-mix')

mix.sass('resources/sass/app.sass', 'src/main.css')
    .ts('resources/ts/app.ts', 'src/main.js')
    .options({
        processCssUrls: false,
        uglify: {
            uglifyOptions: {
                compress: {
                    drop_console: true
                }
            }
        }
    })
    .disableNotifications()