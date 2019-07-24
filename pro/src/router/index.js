import Vue from 'vue'
import Router from 'vue-router'




import Both from "../views/Both.vue"
import Login from "../views/Login.vue"
import Share from 'vue-social-share'
import Register from "../views/Register.vue"
import Time from "../views/Time.vue"
import Photo from "../views/Photo.vue"
import Growth from "../views/Growth.vue"
import Success from "../views/Success.vue"
import Accom from "../views/Accom.vue"
import Imginput from "../views/Imginput.vue"
import Detils from "../views/Detils.vue"
import 'vue-social-share/dist/client.css'


import Index from '../components/Index'
import Footer from '@/views/Footer'
import Question from '@/views/Question'
import Shipu from '../components/Shipu'
import Eatnot from '@/components/Eatnot'
import Yingyang from '@/components/Yingyang'
import Collect from '@/components/Collect'
import Wine from '@/components/Wine'
import kprolist from '@/data/kprolist'
import Mainfood from '@/components/Mainfood'
import Foodlist from '@/components/Foodlist'
// import IScrollView from 'vue-iscroll-view'
//  import IScroll from 'iscroll';
import Cookbook from '@/views/Cookbook'
import All from '@/views/All'



import Attention from '@/components/Attention'
import Attentioninfos from '@/components/Attentioninfos'
import Life from "@/views/Life"
import Community from '@/components/Community'
import Superpro from '@/views/Superpro'
import Superproindex from '@/components/Superproindex'
import Qingjie from '@/components/Qingjie'
import More from "@/components/More";
import Bbbbei from '@/components/Bbbbei';
import Goodsdetail from '@/views/Goodsdetail'
import Goodsdetailindex from '@/components/Goodsdetailindex'
import Goodsdetailljgm from '@/components/Goodsdetailljgm'
import Addtocar from '@/views/Addtocar';
import Evaluate from '@/views/Evaluate'
import bkelist from '@/data/bkelist'
import prolist from '@/data/prolist';
import Swiper from '@/views/Swiper'
import Setting from '@/views/Setting'

import Mine from "@/views/mine"
import Center from "@/views/center"
import Order from "@/views/order"
import Coupon from "@/views/coupon"
import Send from '@/components/send'
import Cart from '@/views/cart'
import Carts from '@/data/Carts'
import Myselect from '@/views/myselect'
import Setup from '@/views/setup'

import Points from '@/views/points'
import Sign from '@/views/sign'
Vue.use(Router)
    // Vue.use(IScrollView, IScroll)
export default new Router({

    routes: [{
            path: '/',
            redirect: "/footer",
        },
        {
            path: '/footer',
            redirect: '/index',
            component: Footer,
            children: [  
              {
              path:"/time",
              component:Time,
              
              },
              {
                    path: '/index',
                    component: Index
                }, {
                    path: '/mine',
                    component: Mine
                },
                {
                    path: '/life',
                    redirect: '/attention',
                    component: Life,
                    children: [{
                            path: '/attention',
                            component: Attention
                        },
                        {
                            path: '/attentioninfos',
                            component: Attentioninfos
                        }
                    ]

                }
            ]
        },
        {
            path: '/cookbook',
            redirect: '/shipu',
            component: Cookbook,
            children: [{
                    path: '/wine',
                    name: "wine",
                    component: Wine,
                },
                {
                    path: '/all',
                    component: All
                },
                {
                    path: '/question',
                    component: Question
                },
                {
                    path: '/wine',
                    name: "wine",
                    component: Wine,
                },
                {
                    path: "/shipu",
                    component: Shipu
                },
                {
                    path: '/eatnot',
                    component: Eatnot,
                    redirect: '/foodlist',
                    children: [{
                            path: '/foodlist',
                            component: Foodlist
                        },
                        {
                            path: '/mainfood/:id',
                            component: Mainfood,
                        },

                    ],
                },
                {
                    path: '/yingyang',
                    component: Yingyang
                },
                {
                    path: '/collect',
                    component: Collect
                }
            ]
        },
        {
            path: '/superpro',
            component: Superpro,
            redirect: '/superproindex',
            children: [{
                    path: '/superproindex',
                    component: Superproindex
                },
                {
                    path: '/qingjie',
                    name: 'Qingjie',
                    component: Qingjie
                },

                {
                    path: '/more',
                    component: More

                },

                {
                    path: '/bbbbei',
                    component: Bbbbei
                },
                {
                    path: '/community',
                    component: Community
                }
            ]
        },
        {
            path: '/goodsdetail',
            redirect: '/goodsdetailindex',
            component: Goodsdetail,
            children: [{
                    path: '/goodsdetailindex',
                    name: 'Goodsdetailindex',
                    component: Goodsdetailindex
                },
                {
                    path: '/goodsdetailljgm',
                    name: 'Goodsdetailljgm',
                    component: Goodsdetailljgm
                }
            ]
        },
        {
            path: '/addtocar',
            name: 'Addtocar',
            component: Addtocar
        },
        {
            path: '/evaluate',
            component: Evaluate
        },
        {
            path: '/swiper',
            component: Swiper
        },
        {
            path: '/setting',
            component: Setting
        },

        {
            path: '/all',
            component: All
        }, {
            path: '/question',
            component: Question
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
        }, {
            path: '/myselect',
            component: Myselect
        }, {
            path: '/setup',
            component: Setup
        },
        {
            path: '/points',
            component: Points
        }, {
            path: '/sign',
            component: Sign

        },
        {
          path: '/Both',
          name: 'Both',
          component: Both
        },
        {
          path:"/Login",
          component:Login
        },
        {
          path:"/register",
          component:Register
        },
        {
          path:"/Photo",
          component:Photo
        },
        {
          path:"/Growth",
          component:Growth
        },
        {
          path:"/Success",
          component:Success
        },
        {
          path:"/Accom",
          component:Accom
        },
        {
          path:"/Imginput",
          component:Imginput
    
        },
        {
          path:"/Detils",
          component:Detils
        }
       
    ]
})

