import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const components={
  Home:()=>import('@/views/home'),
  Login:()=>import('@/views/login'),
  NewsZaoNow:()=>import('@/views/news'),
};


export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: components.Home
    },
    {
      path: '/login',
      name: 'Login',
      component: components.Login
    },
    {
      path: '/news/:id',
      name: 'news',
      component: components.NewsZaoNow
    },
  ]
})
