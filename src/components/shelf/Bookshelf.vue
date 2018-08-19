<template>
  <div class='bookshelf'>
    <div class='menu'>
      <button type='button' @click="$router.push({name: 'Add Book'})">Add new book</button>
    </div>
    <div class='shelf'>
      <Book v-for='book of filteredBooks' v-bind='book' :key='book._id'/>
    </div>
  </div>
</template>

<script>
import _ from 'lodash'

import Book from './Book'

export default {
  name: 'Summary',
  components: {
    Book
  },
  data () {
    return {}
  },
  computed: {
    shelf () {
      return this.$route.params.shelfName.replace(/_/g, ' ')
    },
    filteredBooks () {
      if (this.$store.state.searchQuery) {
        let re = new RegExp(
          '\\b' + this.$store.state.searchQuery
            .toLowerCase()
            .replace(/ /g, '(.*?)')
            .replace(/-/g, '(.*?)')
        )
        return this.$store.state.books
          .filter(book => this.shelf === 'All' || book.shelf === this.shelf)
          .filter(book => Object.values(_.omit(book, ['_id', 'shelf'])).join(' ').toLowerCase().match(re))
      } else {
        return this.$store.state.books.filter(book => this.shelf === 'All' || book.shelf === this.shelf)
      }
    }
  },
  mounted () {
    this.$store.commit('setCurrentShelf', this.$route.params.shelfName)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.menu {
  height: 27px;
  padding-top: 5px;
  border-bottom: 1px solid #444;
}
.shelf {
  display: flex;
  flex-flow: row wrap;
}
</style>
