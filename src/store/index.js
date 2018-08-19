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
    refreshShelvesList ({commit}) {
      commit('getShelves')
    },
    refreshBooksList ({commit}) {
      commit('getShelves')
    },
    loadAuth ({commit}) {
      let key = localStorage.getItem('auth')
      if (key) {
        return axios.get('http://localhost:3000/users/me', {
          headers: {'x-auth': key}
        }).then(res => {
          commit('setAuthKey', key)
        }).catch(e => {
          localStorage.removeItem('auth')
        })
      } else {
        return new Promise((resolve, reject) => {
          resolve('Key does not exist')
        })
      }
    }
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
      axios.post('http://localhost:3000/shelves', {shelves: state.shelves}).then(res => {
        console.log(res)
      }, e => {
        console.log(e)
      })
    },
    setSearchQuery (state, q) {
      state.searchQuery = q
    },
    getShelves (state) {
      axios.get('http://localhost:3000/shelves').then(res => {
        state.shelves = res.shelves
      }, e => {
        console.log(e)
      })
    },
    getBooks (state) {
      axios.get('http://localhost:3000/books').then(res => {
        state.books = res.data
      }, e => {
        console.log(e)
      })
    }
  }
})
