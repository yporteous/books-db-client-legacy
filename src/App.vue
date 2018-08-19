<template>
  <div id="app">
    <Search/>
    <router-view/>
  </div>
</template>

<script>
// import axios from 'axios'

import Search from './components/Search'

export default {
  name: 'App',
  components: {
    Search
  },
  mounted () {
    let auth = localStorage.getItem('auth')
    if (auth) {
      this.$store.commit('setAuthKey', auth)
      this.$store.commit('refreshBookList')
    }
    //
  }
}
</script>

<style>
body {
  background-color: #eeeeee;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  /* margin-top: 60px; */
}
</style>
