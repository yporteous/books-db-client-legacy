<template>
  <div class='bookshelf'>
    <Book v-for='book of filteredBooks' v-bind='book' :key='book._id'/>
  </div>
</template>

<script>
import axios from 'axios'

import Book from './Book'

export default {
  name: 'Summary',
  components: {
    Book
  },
  data () {
    return {
      books: []
    }
  },
  computed: {
    filteredBooks () {
      if (this.$store.state.searchQuery) {
        let re = new RegExp(
          this.$store.state.searchQuery
            .toLowerCase()
            .replace(/ /g, '(.*?)')
            .replace(/-/g, '(.*?)')
        )
        return this.books.filter(book => Object.values(book).join(' ').toLowerCase().match(re))
      } else {
        return this.books
      }
    }
  },
  mounted () {
    axios
      .get('http://localhost:3000/books')
      .then(res => {
        this.books = res.data
      }, e => {
        console.log(e)
      })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.bookshelf {
  display: flex;
  flex-flow: row wrap;
}
</style>
