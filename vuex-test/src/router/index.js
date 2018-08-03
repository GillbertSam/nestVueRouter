import Vue from 'vue'
import Router from 'vue-router'
import userRoute from '../components/user/userRouter'
import homeRoute from '../components/home/homeRoute'

Vue.use(Router)
export default new Router({
  mode:'history',
  routes: [
    {path:'/',redirect:'/home/a'},
    ...userRoute,
    ...homeRoute
  ]
})
