<template>
  <div class='book'>
    <div class='book-title'>{{title}}</div>
    <div class='book-author'>{{author}}</div>
    <div class='book-id'>{{_id}}</div>
    <router-link class='book-info-link' :to="{ name: 'Book', params: {'bookId': _id} }">
      <div>&#x24d8;</div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'Book',
  props: ['title', 'author', '_id']
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
}
.book>div {
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
.book-info-link {
  text-decoration: none;
  color: black;
}
</style>
