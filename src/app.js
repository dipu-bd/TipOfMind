/**
 * Load all of this project's JavaScript dependencies 
 */
require('./utils/plugins.js');

/**
 * Create a fresh Vue application instance and attach it to the page.
 */
import App from './App.vue';

/* eslint-disable no-new */
new Vue({
    el: '#app',
    components: { App },
    template: '<app></app>'
});
