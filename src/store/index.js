import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    searchQuery: '',
    books: [],
    shelves: []
  },
  actions: {

  },
  mutations: {
    setSearchQuery (state, q) {
      state.searchQuery = q
    },
    refreshBookList (state) {
      axios.get('http://localhost:3000/books').then(res => {
        state.books = res.data
      }, e => {
        console.log(e)
      })
    }
  }
})
