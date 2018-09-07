<template>
  <div class='book'>
    <div class='summary'>
      <div class='book-title'>{{title}}</div>
      <div class='book-author'>{{author}}</div>
    </div>
    <div class='footer'>
      <span class='info-button' @click="bookInfoPage">&#x24d8;</span>
    </div>

  </div>
</template>

<script>
export default {
  name: 'Book',
  props: ['title', 'author', '_id'],
  methods: {
    bookInfoPage () {
      this.$router.push({ name: 'Book', params: {'bookId': this._id} })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
.book {
  box-sizing: border-box;
  width: 160px;
  height: 240px;
  border: 1px solid #888;
  margin: 10px 20px;
  padding: 10px;
  display: inline-block;
  vertical-align: top;
  background-color: #ccc;
}
.summary {
  height: 200px;
}
.summary>div {
  margin-bottom: 8px;
}
.book-title {
  font-size: 17px;
  font-weight: bold;
}
.book-author {
  font-size: 13px;
  font-style: italic;
}
.book-id {
  font-size: 8px;
}
.footer {
  height: auto;
  text-align: right;
}
.info-button {
  cursor: pointer;
}
</style>
