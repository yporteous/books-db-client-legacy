<template>
  <div class='summary'>
    <SummarySidebar/>
    <div class='summary-main'>
      <h2>Your Bookshelves</h2>
      <ShelfLink v-for='shelf of shelves' :key='shelf' :name='shelf'/>
      <div class='new-shelf' @click.stop='showNewShelf = true'>
        <div class='sym-plus' v-if='!showNewShelf'>+</div>
        <div class='new-shelf-fields' v-else>
          <input class='new-shelf-name' type='text' size='25' v-model='newShelfName'>
          <button class='new-shelf-button' @click.stop='submitNew'>Add shelf</button>
          <button class='new-shelf-button' @click.stop='showNewShelf = false'>Cancel</button>
        </div>
      </div>
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
      showNewShelf: false,
      newShelfName: ''
    }
  },
  computed: {
    shelves () {
      return this.$store.state.shelves
    }
  },
  methods: {
    submitNew () {
      this.$store.commit('addNewShelf', this.newShelfName.replace(/\b([a-z])/g, match => match.toUpperCase()))
      this.newShelfName = ''
      this.showNewShelf = false
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
.new-shelf {
  cursor: pointer;
  width: 400px;
  height: 40px;
  line-height: 40px;
  border: 1px solid black;
  margin-top: -1px;

  padding-left: 10px;
  font-size: 40px;
  /* text-align: center; */
}
.sym-plus {
  background-color: #5c5;
  width: 30px;
  height: 30px;
  line-height: 30px;
  margin: 5px auto;
  border-radius: 15px;
  text-align: center;
  color: white;
}
.new-shelf-name {
  box-sizing: border-box;
  height: 30px;
  margin: 5px 0 5px -2px;
  vertical-align: top;
  font-size: 20px;
}
.new-shelf-button {
  height: 30px;
  margin: 5px 2px;
  vertical-align: top;
}
.summary-heading {
  /* padding-top: 1px; */
}
</style>
