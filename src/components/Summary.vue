<template>
  <div class='summary'>
    <p>Hello, {{user}}. You have {{nBooks}} books in your library.</p>
  </div>
</template>

<script>
export default {
  name: 'Summary',
  data () {
    return {
      user: '',
      nBooks: '362'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
