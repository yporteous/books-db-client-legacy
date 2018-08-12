<template>
  <div class='book-info'>
    <div class='header'>
      <div class='controls'>
        <span style='cursor: pointer;' @click='backToShelf'>&lt;</span>
      </div>
      <div class='header-info'>
        <h1 class='book-title'>{{info.title}}</h1>
        <h3 class='book-author'>{{info.author}}</h3>
      </div>
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
    <div class='footer'>
      <button @click="editBook">Edit book</button>
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
  computed: {
    bookId () {
      return this.$route.params.bookId
    }
  },
  methods: {
    editBook () {
      this.$router.push({ name: 'Edit Book', params: { bookId: this.bookId } })
    },
    backToShelf () {
      this.$router.push({ name: 'Bookshelf', params: { shelfName: this.$store.state.currentShelf } })
    }
  },
  mounted () {
    axios
      .get(`http://localhost:3000/books/${this.bookId}`)
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
  margin-bottom: 10px;
}
.header>div {
  display: inline-block;
  /* min-height: 120px; */
  vertical-align: top;
}
.controls {
  margin: 10px 0;
  width: 40px;
  line-height: 40px;
  height: 40px;
  font-size: 50px;
  /* border: 1px solid #444; */
  text-align: center;

  -webkit-user-select: none;  /* Chrome all / Safari all */
  -moz-user-select: none;     /* Firefox all */
  -ms-user-select: none;      /* IE 10+ */
  user-select: none;          /* Likely future */
}
.header-info {
  border-left: 1px solid #444;
  padding-left: 10px;
}
.header-info>h1 {
  margin-top: 10px
}
.footer {
  padding-top: 10px;
  border-top: 1px solid #444;
  margin-top: 20px;
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
