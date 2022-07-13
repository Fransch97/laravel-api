/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */


window.Vue = require('vue');
import App from "./App.vue"


window.axios = require('axios');

const app = new Vue({
    el: '#app',
    render: h => h(App)
});


