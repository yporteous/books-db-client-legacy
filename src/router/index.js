import Vue from 'vue'
import Router from 'vue-router'

import Summary from '@/components/summary/Summary'
import Bookshelf from '@/components/shelf/Bookshelf'
import BookInfo from '@/components/bookInfo/BookInfo'
import AddBook from '@/components/addNew/AddBook'

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
    }
  ]
})
