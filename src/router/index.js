import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/page'
    }, {
      path: '/page',
      component: resolve => require.ensure([], () => resolve(require('../pages/page.vue')), 'page'),
      children: [
        {
          path: '',
          redirect: '/home'
        }, {
          path: '/home',
          name: 'home',
          component: resolve => require.ensure([], () => resolve(require('../pages/home.vue')), 'home')
        }
      ]
    }
  ]
})
