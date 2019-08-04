let mix = require('laravel-mix');

mix.sass('resources/sass/app.sass', 'src/main.css')
    .js('resources/js/app.js', 'src/main.js')
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

mix.disableNotifications()