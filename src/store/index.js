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
      'All'
    ],
    currentShelf: 'All'
  },
  actions: {
    refreshShelvesList ({commit}) {
      commit('getShelves')
    },
    refreshBooksList ({commit}) {
      commit('getBooks')
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
    },
    removeShelf ({commit, dispatch}, shelfName) {
      commit('removeShelfFromState', shelfName)
      dispatch('saveShelves')
    },
    saveNewShelf ({commit, dispatch}, newName) {
      commit('addNewShelf', newName)
      dispatch('saveShelves')
    },
    saveShelves ({commit, state}) {
      axios.post('http://localhost:3000/shelves', {
        shelves: state.shelves
      }, {
        headers: {'x-auth': state.authKey}
      }).then(res => {
        // console.log(res)
      }, e => {
        console.log(e)
      })
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
      state.shelves = ['All'].concat(state.shelves.slice(1).sort())
    },
    removeShelfFromState (state, shelfToDelete) {
      state.shelves = state.shelves.filter(shelf => shelf !== shelfToDelete)
    },
    setSearchQuery (state, q) {
      state.searchQuery = q
    },
    getShelves (state) {
      axios.get('http://localhost:3000/shelves', {
        headers: {'x-auth': state.authKey}
      }).then(res => {
        state.shelves = res.data.shelves
      }, e => {
        console.log(e)
      })
    },
    getBooks (state) {
      axios.get('http://localhost:3000/books', {
        headers: {'x-auth': state.authKey}
      }).then(res => {
        state.books = res.data.books
      }, e => {
        console.log(e)
      })
    }
  }
})
