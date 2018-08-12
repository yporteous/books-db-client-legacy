<template>
  <div class='edit-book'>
    <table class='book-fields'>
      <tr v-for='field of fields' :key="field.name.toLowerCase()">
        <th>{{field.name}}:</th>
        <td>
          <input
            :class="{'field-error': errors[field.name.toLowerCase()]}"
            v-if="field.type === 'text'"
            size='40'
            type='text'
            v-model="info[field.name.toLowerCase()]"
          >
          <textarea
            v-else-if="field.type === 'textarea'"
            name='summary'
            rows='12' cols='38'
            v-model="info[field.name.toLowerCase()]"
          ></textarea>
        </td>
      </tr>
      <tr>
        <td></td>
        <td class='table-submit'>
          <button @click="cancel">Cancel</button>
          <button @click="submitBook">Save changes</button>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
import axios from 'axios'
// import Vue from 'vue'

export default {
  name: 'Book',
  data () {
    return {
      fields: [
        { name: 'Title', type: 'text' },
        { name: 'Author', type: 'text' },
        { name: 'Series', type: 'text' },
        { name: 'Year', type: 'text' },
        { name: 'Publisher', type: 'text' },
        { name: 'Tags', type: 'text' },
        { name: 'Shelf', type: 'text' },
        { name: 'Summary', type: 'textarea' }
      ],
      errors: {
        title: false,
        author: false,
        series: false,
        year: false,
        publisher: false,
        tags: false,
        shelf: false
      },
      info: {
        title: '',
        author: '',
        series: '',
        year: '',
        publisher: '',
        summary: '',
        tags: '',
        shelf: ''
      }
    }
  },
  computed: {
    bookId () {
      return this.$route.params.bookId
    }
  },
  methods: {
    cancel () {
      this.$router.push({ name: 'Book', params: { bookId: this.bookId } })
    },
    submitBook () {
      Object.keys(this.errors).map(e => { this.errors[e] = false }) // reset errors before checking

      // check for required fields
      for (let field of ['title', 'author', 'year', 'tags', 'shelf']) {
        if (!this.info[field]) {
          this.errors[field] = true
        }
      }

      // check that year is a whole number, error if not, convert if it is
      if (typeof this.info.year !== 'number') {
        if (
          (this.info.year && isNaN(Number(this.info.year)))
          || this.info.year.match(/\./)
        ) {
          this.errors.year = true
        } else if (this.info.year) {
          this.info.year = Number(this.info.year)
        }
      }

      // if (
      //   typeof this.info.year !== 'number'
      //   && (
      //     (this.info.year && isNaN(Number(this.info.year)))
      //     || this.info.year.match(/\./))
      // ) {
      //   this.errors.year = true
      // } else if (this.info.year) {
      //   this.info.year = Number(this.info.year)
      // }

      // TODO: user feedback on whether books edited
      if (Object.values(this.errors).indexOf(true) === -1) {
        axios.patch(`http://localhost:3000/books/${this.$route.params.bookId}`, {book: this.info}).then(res => {
          console.log('Book Edited')
          this.$store.commit('refreshBookList')
          this.$router.push({ name: 'Book', params: { bookId: this.bookId } })
        }, e => {
          console.log('Could not edit book')
        })
      }
    }
  },
  mounted () {
    axios
      .get(`http://localhost:3000/books/${this.$route.params.bookId}`)
      .then(res => {
        this.info = Object.assign({}, this.info, res.data)
        // this.info = res.data
      }, e => {
        console.log(e)
      })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.edit-book {
  margin: 30px auto;
}
.book-fields {
  margin-left: 50px;
}
td, th {
  padding-bottom: 5px;
}
th {
  width: 100px;
  text-align: right;
  vertical-align: top;
}
input,textarea {
  border: 1px inset #aaa;
}
.field-error {
  background-color: #d88;
}
textarea {
  resize: vertical;
}
.table-submit {
  text-align: center;
}
</style>
