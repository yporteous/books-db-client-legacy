<template>
  <div class='sidebar'>
    <div class='data-item' v-for='item of dataItems' :key='item.text'>
      {{item.text}}: {{item.val}}
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import axios from 'axios'

export default {
  name: 'SummarySidebar',
  data () {
    return {
      dataItems: {
        nBooks: {
          text: 'Books',
          val: ''
        }
      }
    }
  },
  mounted () {
    axios
      .get('http://localhost:3000/books')
      .then(res => {
        Vue.set(this.dataItems.nBooks, 'val', res.data.length.toString())
      }, e => {
        console.log(e)
      })
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
