<template>
  <div id="app">
    <Search/>
    <router-view/>
  </div>
</template>

<script>
import Search from './components/Search'

export default {
  name: 'App',
  components: {
    Search
  },
  mounted () {
    this.$store.dispatch('refreshShelvesList')
    this.$store.dispatch('refreshBooksList')
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
