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
        }, {
          path: '/movies',
          name: 'movies',
          component: resolve => require.ensure([], () => resolve(require('../pages/movie.vue')), 'movies')
        }, {
          path: '/books',
          name: 'books',
          component: resolve => require.ensure([], () => resolve(require('../pages/book.vue')), 'books')
        }, {
          path: '/subjects/:tag',
          name: 'subjects',
          component: resolve => require.ensure([], () => resolve(require('../pages/subjects.vue')), 'subjects')
        }, {
          path: '/detail/:id',
          name: 'detail',
          component: resolve => require.ensure([], () => resolve(require('../pages/detail.vue')), 'detail')
        }
      ]
    }
  ]
})
