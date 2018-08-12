<template>
  <div class='summary'>
    <SummarySidebar/>
    <div class='summary-main'>
      <h2>Your Bookshelves</h2>
      <ShelfLink v-for='shelf of shelves' :key='shelf' :name='shelf'/>
    </div>
  </div>
</template>

<script>
import SummarySidebar from './SummarySidebar'
import ShelfLink from './ShelfLink'

export default {
  name: 'Summary',
  components: {
    SummarySidebar,
    ShelfLink
  },
  data () {
    return {
      user: 'user'
    }
  },
  computed: {
    shelves () {
      return this.$store.state.shelves
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.summary {}
.summary-main {
  margin-top: 0;
  margin-left: 200px;
  padding-left: 20px;
  position: fixed;
}
.summary-heading {
  /* padding-top: 1px; */
}
</style>
