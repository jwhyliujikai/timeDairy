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



Vue.use(Share)

Vue.use(Router)



export default new Router({
  routes: [
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
      path:"/time",
      component:Time,
      
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
