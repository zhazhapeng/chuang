import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/views/Index'
import News from '@/views/News'
import EmployNews from '@/views/EmployNews'
import education from '@/views/education'
import Work from '@/views/Work'
import Recreat from '@/views/Recreat'
import Mlogin from '@/views/Mlogin'
import Register from '@/views/Register'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/news',
      name: 'news',
      component: News
    },
    {
      path: '/edu',
      name: 'edu',
      component: education
    },
     {
      path: '/work',
      name: 'work',
      component: Work
    },
    {
      path: '/employnews',
      name: 'employnews',
      component: EmployNews
    },
     {
      path: '/mlogin',
      name: 'mlogin',
      component: Mlogin
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/recreat',
      name: 'recreat',
      component: Recreat
    }
  ]
})
