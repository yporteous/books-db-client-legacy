<template>
  <div class='search-bar'>
    <div class='nav-button'>Home</div>
    <div class='nav-button'>Bookshelf</div>
    <div class='nav-button search'>
      <input class='search-box' type='text' placeholder='Search...' v-model="searchQuery">
    </div>
  </div>
</template>

<script>
export default {
  name: 'Search',
  computed: {
    searchQuery: {
      get () {
        return this.$store.state.searchQuery
      },
      set (q) {
        this.$store.commit('setSearchQuery', q)
      }
    }
  }
}
</script>

<style scoped lang="css">
.search-bar {
  width: 100%;
  height: 40px;
  background-color: #aaa;
  text-align: left;
  display: flex;
}
.nav-button {
  display: inline-block;
  width: 150px;
  height: 40px;
  line-height: 40px;
  text-align: center;
}
.search {
  margin-left: auto;
  width: 200px;
}
.search-box {
  /* height: 30px; */
  width: 150px;
  line-height: 24px;
  border: none;
  margin: 7px 0;
  vertical-align: top;
  padding-left: 5px;
}
</style>
