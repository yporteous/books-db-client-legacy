<template>
  <div
    class='shelf-link'
    @click="goToShelf"
    :style="{backgroundColor: colour}"
  >
    <div class='shelf-name'>{{name}}</div>
    <div
      v-if='name != "All"'
      class='shelf-menu'
      @click.stop="showMenu = !showMenu"
      @mouseleave.stop="showMenu = false"
    >
      &hellip;
      <div class='dropdown-content' :class="{'dropdown-show': showMenu}">
        <div class='dropdown-link' @click='removeShelf'>
          <span class='dropdown-text'>Remove shelf</span>
        </div>
        <div id='colour-picker' class='dropdown-link'>
          <div
            v-for='(colour, index) of colours'
            :key='index'
            class='colour-item'
            :style='{backgroundColor: colour}'
            @click.stop='setColour(colour)'
            ></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ShelfLink',
  props: ['name'],
  data () {
    return {
      showMenu: false
    }
  },
  computed: {
    colour () {
      return this.$store.state.shelfColours[this.name]
    },
    path () {
      return this.name.replace(/ /g, '_')
    },
    colours () {
      return this.$store.state.colours
    }
  },
  methods: {
    goToShelf () {
      this.$router.push({
        name: 'Bookshelf',
        params: { shelfName: this.path }
      })
    },
    removeShelf () {
      this.$store.dispatch('removeShelf', this.name)
    },
    setColour (newColour) {
      let shelf = {name: this.name, colour: newColour}
      this.$store.dispatch('updateShelf', shelf)
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
.shelf-link>div {
  display: inline-block;
}
.shelf-name {
  width: 360px;
}
.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f5f5f5;
  border: 1px solid #444;
  width: auto;
  min-width: 150px;
  max-height: 420px;
  height: auto;
  overflow-y: auto;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
}
.dropdown-show {
  display: flex;
  flex-flow: column nowrap;
}
.dropdown-link {
  text-align: center;
  height: 30px;
  line-height: 30px;
  font-size: 15px;
  border-bottom: 1px solid #444;
}
.dropdown-link:last-child {
  border-bottom: none;
}
#colour-picker {
  display: flex;
  max-width: 150px;
  flex-flow: row wrap;
  height: auto;
}
.colour-item {
  width: 15px;
  height: 15px;
  margin: 5px;
}
</style>
