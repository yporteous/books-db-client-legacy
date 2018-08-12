<template>
  <div class='summary'>
    <SummarySidebar/>
    <div class='summary-main'>
      <h3>Your Library</h3>
      <!-- <p>Hello, {{user}}.</p> -->
      <router-link to='books'>View Library</router-link>
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
      user: 'user',
      nBooks: ''
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
