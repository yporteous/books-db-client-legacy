import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

// 'https://quiet-woodland-63691.herokuapp.com/'
// TODO: move url to process variable

export default new Vuex.Store({
  state: {
    authKey: '',
    searchQuery: '',
    books: [],
    colours: [
      '#888',
      '#8bf',
      '#fba',
      '#bf9',
      '#9fd',
      '#eaf',
      '#bef'
    ],
    shelves: [
      'All'
    ],
    shelfColours: {
      'All': '#ccc'
    },
    currentShelf: 'All',
    url: 'http://localhost:3000/'
  },
  actions: {
    refreshAll ({commit}) {
      commit('getShelves')
      commit('getBooks')
    },
    refreshShelvesList ({commit}) {
      commit('getShelves')
    },
    refreshBooksList ({commit}) {
      commit('getBooks')
    },
    loadAuth ({state, commit}) {
      let key = localStorage.getItem('auth')
      if (key) {
        return axios.get(state.url + 'users/me', {
          headers: {'X-Auth': key}
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
    saveNewShelf ({commit, dispatch}, newShelf) {
      commit('addNewShelf', newShelf)
      dispatch('saveShelves')
    },
    updateShelf ({commit, dispatch}, payload) {
      commit('editShelf', payload)
      dispatch('saveShelves')
    },
    saveShelves ({commit, state}) {
      let shelves = state.shelves.map(shelf => {
        return {
          name: shelf,
          colour: state.shelfColours[shelf]
        }
      })
      axios.post(state.url + 'shelves', {
        shelves
      }, {
        headers: {'X-Auth': state.authKey}
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
      state.shelves.push(shelf.name)

      state.shelves.sort((a, b) => {
        if (a === 'All') {
          return -1
        } else if (b === 'All') {
          return 1
        } else if (a < b) {
          return -1
        } else if (a > b) {
          return 1
        }
      })

      Vue.set(state.shelfColours, shelf.name, shelf.colour)
    },
    editShelf (state, shelf) {
      Vue.set(state.shelfColours, shelf.name, shelf.colour)
    },
    removeShelfFromState (state, shelfToDelete) {
      state.shelves = state.shelves.filter(shelf => shelf !== shelfToDelete)
    },
    setSearchQuery (state, q) {
      state.searchQuery = q
    },
    // TODO: make these action bc asynchronous
    getShelves (state) {
      axios.get(state.url + 'shelves', {
        headers: {'X-Auth': state.authKey}
      }).then(res => {
        state.shelves = res.data.shelves.map(shelf => shelf.name)
        res.data.shelves.forEach(shelf => {
          Vue.set(state.shelfColours, shelf.name, shelf.colour)
        })
      }, e => {
        console.log(e)
      })
    },
    getBooks (state) {
      axios.get(state.url + 'books', {
        headers: {'X-Auth': state.authKey}
      }).then(res => {
        state.books = res.data.books.sort((a, b) => {
          let authA = a.author.split(' ').pop()
          let authB = b.author.split(' ').pop()
          return authA < authB
            ? -1
            : authA > authB
              ? 1
              : 0
        })
      }, e => {
        console.log(e)
      })
    }
  }
})
