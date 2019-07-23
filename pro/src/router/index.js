import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Attention from '@/components/Attention'
import Attentioninfos from '@/components/Attentioninfos'
import Index from '@/views/index'
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
Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            component: Index
        },
        {
            path: '/index',
            name: 'Index',
            component: Index,
            children: [{
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
        }
    ]
})