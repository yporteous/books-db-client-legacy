import Vue from 'vue'
import Router from 'vue-router'

import Summary from '@/components/summary/Summary'
import Bookshelf from '@/components/shelf/Bookshelf'
import BookInfo from '@/components/bookInfo/BookInfo'
import AddBook from '@/components/addNew/AddBook'
import EditBook from '@/components/addNew/EditBook'
import Login from '@/components/login/Login'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Summary',
      component: Summary
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
