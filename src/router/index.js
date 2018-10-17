import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const components={
  Home:()=>import('@/views/home'),
  Login:()=>import('@/views/login'),
  NewsZaoNow:()=>import('@/views/news'),
  earlyNews:()=>import('@/views/earlyNews'),
  mineMsg:()=>import('@/views/mineMsg'),
  notice:()=>import('@/views/notice'),
};


export default new Router({
  linkActiveClass: 'active',
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
    {
      path: '/earlyNews',
      name: 'earlyNews',
      component: components.earlyNews
    },
    {
      path: '/mineMsg',
      name: 'mineMsg',
      component: components.mineMsg
    },
    {
      path: '/notice/:id',
      name: 'notice',
      component: components.notice
    },
  ]
})
