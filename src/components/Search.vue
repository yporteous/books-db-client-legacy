<template>
  <div class='search-bar'>
    <div class='nav-item nav-link' @click="$router.push({ name: 'Summary' })">Home</div>
    <div class='nav-item nav-link' @mouseover="shelfList = true" @mouseleave="shelfList = false">
      Bookshelves &#x25BE;
      <div class='dropdown-content' :class="{'dropdown-show': shelfList}">
        <div v-for='shelf of shelves' :key='shelf' class='nav-item dropdown-link' @click='goToShelf(shelf)'>
          <span class='dropdown-text'>{{shelf}}</span>
        </div>
      </div>
    </div>
    <div class='nav-item search'>
      <input class='search-box' type='search' placeholder='Search...' v-model="searchQuery">
    </div>
  </div>
</template>

<script>
export default {
  name: 'Search',
  data () {
    return {
      shelfList: false
    }
  },
  methods: {
    goToShelf (shelf) {
      this.$router.push({
        name: 'Bookshelf',
        params: { shelfName: shelf.replace(/ /g, '_') }
      })
    }
  },
  computed: {
    shelves () {
      return this.$store.state.shelves
    },
    searchQuery: {
      get () {
        return this.$store.state.searchQuery
      },
      set (q) {
        if (q && !this.$router.currentRoute.path.match(/\/bookshelf\//)) {
          this.$router.push({
            name: 'Bookshelf',
            params: { shelfName: this.$store.state.currentShelf }
          })
        }
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
.nav-item {
  display: inline-block;
  height: 40px;
  line-height: 40px;
  text-align: center;
  -webkit-user-select: none;  /* Chrome all / Safari all */
  -moz-user-select: none;     /* Firefox all */
  -ms-user-select: none;      /* IE 10+ */
  user-select: none;          /* Likely future */
  cursor: pointer;
}
.nav-link {
  width: 150px;
}
.nav-link:hover {
  background-color: #777;
}
.dropdown-link {
  background-color: #ccc;
  display: block;
}
.dropdown-link:hover {
  background-color: #999;
}
.dropdown-text {
  display: block;
  padding: 0 10px;
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
  padding-right: 5px;
}
.dropdown-content {
  display: none;
  box-sizing: border-box;
  position: absolute;
  background-color: #ccc;
  width: auto;
  min-width: 150px;
  max-height: 420px;
  overflow-y: auto;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
}
.dropdown-show {
  display: block;
}
</style>
