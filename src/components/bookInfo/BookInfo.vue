<template>
  <div class='book-info'>
    <div class='header'>
      <h1 class='book-title'>{{info.title}}</h1>
      <h3 class='book-author'>{{info.author}}</h3>
    </div>
    <div class='main'>
      <div class='column'>
        <div class='image-placeholder'></div>
        <div class='summary'>{{info.summary}}</div>
      </div>
      <div class='column'>
        <table>
          <tr>
            <th>Series</th>
            <td>{{info.series}}</td>
          </tr>
          <tr>
            <th>Year</th>
            <td>{{info.year}}</td>
          </tr>
          <tr>
            <th>Publisher</th>
            <td>{{info.publisher}}</td>
          </tr>
        </table>
      </div>
    </div>

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
        author: '',
        summary: '',
        series: '',
        year: '',
        publisher: ''
      }
    }
  },
  mounted () {
    axios
      .get(`http://localhost:3000/books/${this.$route.params.bookId}`)
      .then(res => {
        this.info = Object.assign({}, this.info, res.data)
        // this.info = res.data
      }, e => {
        console.log(e)
      })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.book-info {
  margin-left: 20px;
  text-align: left;
}
.image-placeholder {
  width: 160px;
  height: 250px;
  background-color: #444;
}
.header {
  border-bottom: 1px solid #444;
  margin-bottom: 20px;
}
.column {
  vertical-align: top;
  width: calc(50% - 40px);
  display: inline-block;
}
.summary {
  margin-top: 10px;
  white-space: pre-wrap;
}
th:first-child {
  width: 100px;
}
</style>
