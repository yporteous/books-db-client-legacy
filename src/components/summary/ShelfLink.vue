<template>
  <div class='shelf-link' @click="goToShelf">
    {{name}}
  </div>
</template>

<script>
export default {
  name: 'ShelfLink',
  props: ['name'],
  computed: {
    path () {
      return this.name.replace(/ /g, '_')
    }
  },
  methods: {
    goToShelf () {
      this.$router.push({
        name: 'Bookshelf',
        params: { shelfName: this.path }
      })
    }
  }
}
</script>

<style lang="css">
.shelf-link {
  cursor: pointer;
  width: 400px;
  height: 40px;
  line-height: 40px;
  border: 1px solid black;
  margin-top: -1px;

  padding-left: 10px;
  font-size: 20px;
}
</style>
