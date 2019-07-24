// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vant from 'vant'
import store from './store'
import "vant/lib/index.css"
import { Uploader } from 'vant'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
Vue.use(VueAwesomeSwiper, /* { default global options } */ )
Vue.use(Uploader);
Vue.use(Vant)
Vue.config.productionTip = false



new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
 
})
