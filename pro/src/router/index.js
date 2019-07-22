import Vue from 'vue'
import Router from 'vue-router'
import Mine from "@/views/mine"
import Center from "@/views/center"
import Order from "@/views/order"
import Coupon from "@/views/coupon"
import Send from '@/components/send'
import Cart from '@/views/cart'
import Carts from '@/data/Carts'
import Myselect from '@/views/myselect'
import Setup from '@/views/setup'
Vue.use(Router)

export default new Router({
    routes: [{
        path: '/mine',
        component: Mine
    }, {
        path: '/center',
        component: Center
    }, {
        path: '/order',
        component: Order
    }, {
        path: '/coupon',
        component: Coupon
    }, {
        path: '/send',
        component: Send
    }, {
        path: '/cart',
        component: Cart
    },{
        path: '/myselect',
        component: Myselect
    },{
        path: '/setup',
        component: Setup
    }]
})