const { mix } = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('src/app.js', 'dist/js/app.js')
   .sass('src/styles/app.scss', 'dist/css/app.css')
   .copy('index.html', 'dist/index.html')
   .copy('blog/', 'dist/blog')
   .setPublicPath(__dirname)
   .sourceMaps();

mix.disableNotifications();
