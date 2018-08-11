<template>
  <div class='sidebar'>
    <div class='data-item' v-for='item of dataItems' :key='item.text'>
      {{item.text}}: {{item.val}}
    </div>
  </div>
</template>

<script>
export default {
  name: 'SummarySidebar',
  computed: {
    dataItems () {
      return {
        nBooks: {
          text: 'Books',
          val: this.$store.state.books.length
        }
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.sidebar {
  box-sizing: border-box;
  width: 200px;
  height: 100%;

  border-right: 2px solid #ccc;
  position: fixed;
  /* float: left; */
  padding-top: 10px;
  display: flex;
  flex-flow: column nowrap;
}
</style>
