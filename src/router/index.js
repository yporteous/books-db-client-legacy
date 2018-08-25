import Vue from 'vue'
import Router from 'vue-router'

import store from '@/store'

import Summary from '@/components/summary/Summary'
import Bookshelf from '@/components/shelf/Bookshelf'
import BookInfo from '@/components/bookInfo/BookInfo'
import AddBook from '@/components/addNew/AddBook'
import EditBook from '@/components/addNew/EditBook'
import Login from '@/components/login/Login'

Vue.use(Router)

// export default new Router({

let router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Summary',
      component: Summary,
      beforeEnter: (to, from, next) => {
        store.commit('setCurrentShelf', 'All')
        next()
      }
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/book/new',
      name: 'Add Book',
      component: AddBook
    },
    {
      path: '/bookshelf/:shelfName',
      name: 'Bookshelf',
      component: Bookshelf
    },
    {
      path: '/book/:bookId',
      name: 'Book',
      component: BookInfo
    },
    {
      path: '/book/edit/:bookId',
      name: 'Edit Book',
      component: EditBook
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (store.state.authKey && to.path === '/login') {
    next('/')
  } else if (store.state.authKey || to.path === '/login') {
    next()
  } else {
    next('/login')
  }
})

export default router
