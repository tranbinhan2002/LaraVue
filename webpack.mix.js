const mix = require('laravel-mix');



mix.js('resources/admin/app.js', 'public/admin/js')
    .vue()
    .sass('resources/sass/app.scss', 'public/admin/css');

mix.js('resources/frontend/app.js', 'public/frontend/js')
    .vue()
    .sass('resources/sass/main.scss', 'public/frontend/css');