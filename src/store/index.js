import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    authKey: '',
    searchQuery: '',
    books: [],
    shelves: [
      'All',
      'Science Fiction',
      'STEM',
      'Fiction'
    ],
    currentShelf: 'All'
  },
  actions: {

  },
  mutations: {
    setAuthKey (state, key) {
      state.authKey = key
    },
    setCurrentShelf (state, shelf) {
      state.currentShelf = shelf
    },
    addNewShelf (state, shelf) {
      state.shelves.push(shelf)
    },
    setSearchQuery (state, q) {
      state.searchQuery = q
    },
    refreshShelvesList (state) {
      axios.get('http://localhost:3000/shelves').then(res => {
        state.shelves = res.shelves
      }, e => {
        console.log(e)
      })
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
