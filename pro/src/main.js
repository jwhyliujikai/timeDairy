// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'


import Vant from 'vant';
import 'vant/lib/index.css';




//import 'lib-flexible/flexible';


import store from './store';
import $ from 'n-zepto'
// import 'lib-flexible/flexible'


Vue.use(Vant);

Vue.config.productionTip = false




new Vue({
    el: '#app',
    router,
    store,
    components: { App },
    template: '<App/>'
})