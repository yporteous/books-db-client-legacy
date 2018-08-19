<template>
  <div class='sidebar'>
    <h3>Statistics</h3>
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
      return [
        {
          text: 'Books',
          val: this.$store.state.books.length
        },
        {
          text: 'Shelves',
          val: this.$store.state.shelves.filter(shelf => shelf !== 'All').length
        }
      ]
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
  vertical-align: top;

  border-right: 2px solid #ccc;
  position: fixed;
  /* float: left; */
  padding-left: 10px;
  display: flex;
  flex-flow: column nowrap;
}

h3 {
  /* margin-top: 0 */
}
</style>
