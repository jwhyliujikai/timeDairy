import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

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
            children: [{
                path: '/index',
                component: Index
            }, {
                path: '/life',
                redirect: '/attention',
                component: Life,
                children: [{
                    path: '/attention',
                    component: Attention
                }, {
                    path: '/attentioninfos',
                    component: Attentioninfos
                }]

            }]
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
            path: '/all',
            component: All
        },
        {
            path: '/question',
            component: Question
        }, {
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
            }, {
                path: '/goodsdetailljgm',
                name: 'Goodsdetailljgm',
                component: Goodsdetailljgm
            }]
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
        }

    ]
})