<template>
  <div class='book'>
    <div class='summary'>
      <div class='book-title'>{{title}}</div>
      <div class='book-author'>{{author}}</div>
    </div>
    <div class='info-button' @click="bookInfoPage">&#x24d8;</div>
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
  width: 130px;
  height: 200px;
  border: 1px solid #888;
  margin: 10px 20px;
  padding: 10px;
  display: inline-block;
  vertical-align: top;
  background-color: #ccc;
}
.summary {
  height: 180px;
}
.summary>div {
  margin-bottom: 3px;
}
.book-title {
  font-size: 20px;
}
.book-author {
  font-size: 13px;
}
.book-id {
  font-size: 8px;
}
.info-button {
  cursor: pointer;
  text-align: right;
}
</style>
