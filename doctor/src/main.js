// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

import VueResource from 'vue-resource'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.css'

import firebase from 'firebase'

import router from './router'
import store from './store/store'

import keys from './keys.json'

import App from './App'

Vue.use(VueResource)
Vue.use(VueMaterial)

var is_keyboard = false;
var is_landscape = false;
var initial_screen_size = window.innerHeight;

/* Android */
window.addEventListener("resize", function() {
    is_keyboard = (window.innerHeight < initial_screen_size);
    is_landscape = (screen.height < screen.width);

    console.log(is_keyboard, is_landscape)
}, false);

firebase.initializeApp(keys.firebase);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  router,
  store
})
