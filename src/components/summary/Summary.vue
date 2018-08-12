<template>
  <div class='summary'>
    <SummarySidebar/>
    <div class='summary-main'>
      <h3>Your Library</h3>
      <router-link to='bookshelf/Science_Fiction'>View Library</router-link>
    </div>
  </div>
</template>

<script>
import SummarySidebar from './SummarySidebar'

export default {
  name: 'Summary',
  components: {
    SummarySidebar
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
