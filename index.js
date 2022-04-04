import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import blog from '@/components/blog'
import education from '@/components/education'
import contact from '@/components/contact'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path:'/blog',
      name: 'blog',
      component: blog
    },
    {
      path:'/education',
      name: 'education',
      component: education
    },
    {
      path:'/contact',
      name: 'contact',
      component: contact
    }
  ]
})
