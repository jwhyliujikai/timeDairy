// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'vant/lib/index.css'
import 'lib-flexible/flexible'
import $ from 'n-zepto'
import animated from 'animate.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'

// require styles
import 'swiper/dist/css/swiper.css'


import Vant from 'vant';
import store from './store';
Vue.use(animated)
Vue.use(VueAwesomeSwiper, /* { default global options } */ )
Vue.use(Vant);
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    components: { App },
    template: '<App/>'
})