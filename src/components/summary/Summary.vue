<template>
  <div class='summary'>
    <p>Hello, {{user}}. You have {{nBooks}} books in your library.</p>
    <router-link to='books'>View Library</router-link>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Summary',
  data () {
    return {
      user: 'user',
      nBooks: ''
    }
  },
  mounted () {
    axios
      .get('http://localhost:3000/books')
      .then(res => {
        this.nBooks = res.data.length.toString()
      }, e => {
        console.log(e)
      })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
