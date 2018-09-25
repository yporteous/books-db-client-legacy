<template>
  <div class='book-info'>
    <div id='header'>
      <div id='controls'>
        <span style='cursor: pointer;' @click='backToShelf'>&lt;</span>
      </div>
      <div id='header-items' :style="{backgroundColor: shelfColour}">
        <div id='header-info'>
          <h1 class='book-title'>{{info.title}}</h1>
          <h3 class='book-author'>{{info.author}}</h3>
        </div>
        <div id='shelf-info'>
          <h2>{{info.shelf}}</h2>
        </div>
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
      <button type='button' @click="editBook">Edit book</button>
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
        publisher: '',
        shelf: ''
      }
    }
  },
  computed: {
    bookId () {
      return this.$route.params.bookId
    },
    shelfColour () {
      return this.$store.state.shelfColours[this.info.shelf]
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
      .get(`${this.$store.state.url}books/${this.bookId}`, {
        headers: {'x-auth': this.$store.state.authKey}
      })
      .then(res => {
        this.info = Object.assign({}, this.info, res.data)
      }, e => {
        console.log(e)
      })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.book-info {
  /* margin: 0 20px; */
  text-align: left;
}
.image-placeholder {
  width: 160px;
  height: 250px;
  background-color: #444;
}
#header {
  border-bottom: 1px solid #444;
  margin-left: 0;
  margin-bottom: 10px;
  display: flex;
  width: 100%;
}
#header-items {
  flex-grow: 1;
  display: inline-flex;
  flex-flow: row nowrap;
  /* width: calc(100% - 45px); */
  overflow-x: hidden;
  margin: 0;
}
.header-items>div {
  display: inline-block;
  /* min-height: 120px; */
  vertical-align: top;
}
#shelf-info {
  margin-left: auto;
  margin-right: 20px;
}
#controls {
  margin: 10px 0;
  width: 40px;
  line-height: 40px;
  height: 40px;
  font-size: 50px;
  text-align: center;
  display: inline-block;

  -webkit-user-select: none;  /* Chrome all / Safari all */
  -moz-user-select: none;     /* Firefox all */
  -ms-user-select: none;      /* IE 10+ */
  user-select: none;          /* Likely future */
}
#header-info {
  border-left: 1px solid #444;
  padding: 0 50px 0 10px;
  /* width: 80% */
}
.header-info>h1 {
  margin-top: 10px
}
.main {
  margin: 0 20px;
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
