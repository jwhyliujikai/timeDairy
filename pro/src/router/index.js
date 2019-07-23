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

Vue.use(Router)
// Vue.use(IScrollView, IScroll)
export default new Router({
  routes: [
    {
      path: '/',
      redirect:"/footer",

    },
   
    {
      path:'/footer',
      redirect:'/index',
      component:Footer,
      children:[
        {
          path:'/index',
          component:Index
        }
      ]
    },
    {
      path:'/cookbook',
      redirect:'/shipu',
      component:Cookbook,
      children:[
        {               
          path:'/wine/',
          name:"wine",
          component:Wine,  
        },
        {
          path:"/shipu",
          component:Shipu
        },
        {
          path:'/eatnot',
          component:Eatnot,
          redirect:'/foodlist',
          children:[ 
             {
              path:'/foodlist',
              component:Foodlist
          },
          {
            path:'/mainfood/:id',
            component:Mainfood,
          },
          
        ],

          
        },
        
        {
          path:'/yingyang',
          component:Yingyang
        },
        {
          path:'/collect',
          component:Collect
        }
        
      ]
    },
    {
      path:'/all',
      component:All
    },
    {
      path:'/question',
      component:Question
    },
    
  ]
})
