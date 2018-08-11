<template>
  <div class='summary'>
    <SummarySidebar/>
    <div class='summary-main'>
      <p>Hello, {{user}}.</p>
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
.summary {
}
.summary-main {
  /* flex-grow: 1; */
  margin-left: 200px;
  padding-left: 20px;
}
</style>
