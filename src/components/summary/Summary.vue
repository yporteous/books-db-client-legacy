<template>
  <div class='summary'>
    <SummarySidebar/>
    <div class='summary-main'>
      <h2>Your Bookshelves</h2>
      <ShelfLink v-for='shelf of shelves' :key='shelf' :name='shelf'/>
      <div class='new-shelf' @click.stop='showNewShelf = true'>
        <div class='sym-plus' v-if='!showNewShelf'>+</div>
        <div class='new-shelf-fields' v-else>
          <input id='new-shelf-name' type='text' size='20' v-model='newShelfName'>

          <div id='new-shelf-colour' @mouseleave="colourPicker = false" @click='colourPicker = !colourPicker'>
            <div
              class='colour-display'
              :style='{backgroundColor: newShelfColour}'
            ></div>
            <div class='dropdown-content' :class="{'dropdown-show': colourPicker}">
              <div
                v-for='(colour, index) of colours'
                :key='index'
                class='dropdown-item'
                :style='{backgroundColor: colour}'
                @click.stop='newShelfColour = colour'
                ></div>
            </div>
          </div>

          <button type='button'
            class='new-shelf-button'
            @click.stop='submitNew'
            :disabled='disallowSubmit'
            :title='submitMessage'
          >Add shelf</button>
          <button type='button' class='new-shelf-button' @click.stop='showNewShelf = false'>Cancel</button>
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
      newShelfName: '',
      colourPicker: false,
      newShelfColour: '#888'
    }
  },
  computed: {
    colours () {
      return this.$store.state.colours
    },
    shelves () {
      return this.$store.state.shelves
    },
    shelfColours () {
      return this.$store.state.shelfColours
    },
    disallowSubmit () {
      return !this.newShelfName.length
        || this.shelves.indexOf(this.newShelfName.replace(/\b([a-z])/g, match => match.toUpperCase())) > -1
    },
    submitMessage () {
      return !this.newShelfName.length
        ? 'Must have a name'
        : this.shelves.indexOf(this.newShelfName.replace(/\b([a-z])/g, match => match.toUpperCase())) > -1
          ? 'Name already exists'
          : false
    }
  },
  methods: {
    submitNew () {
      let newName = this.newShelfName.replace(/\b([a-z])/g, match => match.toUpperCase())
      if (this.shelves.indexOf(newName) > -1) {
        console.log('Already exists')
      } else {
        this.$store.dispatch('saveNewShelf', {name: newName, colour: this.newShelfColour})
        this.newShelfName = ''
        this.showNewShelf = false
      }
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
#new-shelf-name {
  box-sizing: border-box;
  height: 30px;
  margin: 5px 0 5px -2px;
  vertical-align: top;
  font-size: 20px;
}
#new-shelf-colour {
  display: inline-block;
}
.new-shelf-button {
  height: 30px;
  margin: 5px 2px;
  vertical-align: top;
}
.summary-heading {
  /* padding-top: 1px; */
}
.dropdown-content {
  display: none;
  box-sizing: border-box;
  position: absolute;
  background-color: #ccc;
  /* width: 50px; */
  /* box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2); */
  z-index: 1;
  flex-flow: row wrap;
}
.dropdown-show {
  display: flex;
  width: 120px;
}
.dropdown-item {
  width: 15px;
  height: 15px;
  margin: 5px;
}
.colour-display {
  width: 20px;
  height: 20px;
}
</style>
