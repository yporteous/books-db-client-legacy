<template>
  <div class='book-info'>
    <h1 class='book-title'>{{info.title}}</h1>
    <h3 class='book-author'>{{info.author}}</h3>
    <p class='summary'>A brief summary</p>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Book',
  data () {
    return {
      info: {
        title: '',
        author: ''
      }
    }
  },
  mounted () {
    axios
      .get(`http://localhost:3000/books/${this.$route.params.bookId}`)
      .then(res => {
        this.info = res.data
      }, e => {
        console.log(e)
      })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* .book-title {
  font-size: 20px;
}
.book-author {
  font-size: 13px;
} */
</style>
