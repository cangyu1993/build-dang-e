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
  msgEyes:()=>import('@/views/msgEyes'),
  msgEyesChild:()=>import('@/views/msgEyesChild'),
  listShow:()=>import('@/views/listShow'),
  listShowChild:()=>import('@/views/listShowChild'),
  study:()=>import('@/views/study'),
  thinkingReport:()=>import('@/views/thinkingReport'),
  summarize:()=>import('@/views/summarize'),
  Bmap:()=>import('@/views/Bmap'),
  commentFor:()=>import('@/views/commentFor'),
  commentForChild:()=>import('@/views/commentForChild'),
  MinZhuPingYi:()=>import('@/views/MinZhuPingYi'),
  historyToday:()=>import('@/views/historyToday'),
  shootHome:()=>import('@/views/shootHome'),
  partyMember:()=>import('@/views/partyMember'),
  personalInformation:()=>import('@/views/personalInformation'),
  changePassword:()=>import('@/views/changePassword'),
  payFor:()=>import('@/views/payFor'),
  personIntegral:()=>import('@/views/personIntegral'),
  countDetail:()=>import('@/views/countDetail'),
  cloudInteraction:()=>import('@/views/cloudInteraction'),
  cloudInteractionChild:()=>import('@/views/cloudInteractionChild'),
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
    {
      path: '/home/msgEyes',
      name: 'msgEyes',
      component: components.msgEyes
    },
    {
      path: '/home/msgEyes/msgEyesChild/:id',
      name: 'msgEyesChild',
      component: components.msgEyesChild
    },
    {
      path: '/home/listShow',
      name: 'listShowDetail',
      component: components.listShow
    },
    {
      path: '/home/listShow/listShowChild',
      name: 'listShowChild',
      component: components.listShowChild
    },
    {
      path: '/home/study',
      name: 'study',
      component: components.study
    },
    {
      path: '/home/study/thinkingReport',
      name: 'thinkingReport',
      component: components.thinkingReport
    },
    {
      path: '/home/study/summarize',
      name: 'summarize',
      component: components.summarize
    },
    {
      path: '/home/study/Bmap',
      name: 'Bmap',
      component: components.Bmap
    },
    {
      path: '/home/study/commentFor',
      name: 'commentFor',
      component: components.commentFor
    },
    {
      path: '/home/study/commentFor/commentForChild',
      name: 'commentForChild',
      component: components.commentForChild
    },
    {
      path: '/home/study/commentFor/MinZhuPingYi',
      name: 'MinZhuPingYi',
      component: components.MinZhuPingYi
    },
    {
      path: '/home/historyToday',
      name: 'historyToday',
      component: components.historyToday
    },
    {
      path: '/home/shootHome',
      name: 'shootHome',
      component: components.shootHome
    },
    {
      path: '/home/study/commentFor/partyMember',
      name: 'partyMember',
      component: components.partyMember
    },
    {
      path: '/home/personalInformation',
      name: 'personalInformation',
      component: components.personalInformation
    },
    {
      path: '/home/changePassword',
      name: 'changePassword',
      component: components.changePassword
    },
    {
      path: '/home/payFor',
      name: 'payFor',
      component: components.payFor
    },
    {
      path: '/home/personIntegral',
      name: 'personIntegral',
      component: components.personIntegral
    },
    {
      path: '/home/countDetail',
      name: 'countDetail',
      component: components.countDetail
    },
    {
      path: '/home/cloudInteraction',
      name: 'cloudInteraction',
      component: components.cloudInteraction
    },
    {
      path: '/home/cloudInteraction/cloudInteractionChild/:id',
      name: 'cloudInteractionChild',
      component: components.cloudInteractionChild
    },
  ]
})
