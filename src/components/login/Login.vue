<template>
  <div class='login'>
    <div class='login-form-wrapper'>
      <div class='form-select'>
        <div
          class='form-select-option'
          :class="{'form-select-selected': login}"
          @click="login = true"
        >Log In</div>
        <div
          class='form-select-option'
          :class="{'form-select-selected': !login}"
          @click="login = false"
        >Sign Up</div>
      </div>
      <form class='login-form'>
        <table>
          <tr class='login-field-row'>
            <th>Username</th>
            <td>
              <input
                class='login-field'
                size='20' type='text'
                autocomplete='username'
                v-model='username'
              >
            </td>
          </tr>
          <tr class='login-field-row'>
            <th>Password</th>
            <td>
              <input
                class='login-field'
                size='20'
                type='password'
                autocomplete='current-password'
                v-model='password'
              >
            </td>
          </tr>
          <tr class='login-field-wrapper'>
            <td colspan='2'><button type='button' class='submit' @click='submit'>{{buttonMessage}}</button></td>
          </tr>
        </table>
      </form>
    </div>
  </div>

</template>

<script>
import axios from 'axios'

export default {
  name: 'Login',
  data () {
    return {
      username: '',
      password: '',
      login: true
    }
  },
  computed: {
    buttonMessage () {
      return this.login
        ? 'Log In'
        : 'Sign Up'
    }
  },
  methods: {
    submit () {
      let apiUrl = this.login
        ? 'http://localhost:3000/users/login/'
        : 'http://localhost:3000/users/'

      axios
        .post(apiUrl, {
          user: {
            username: this.username,
            password: this.password
          }
        }).then(res => {
          console.log(res.headers)
          localStorage.setItem('auth', res.headers['x-auth'])
        })
    }
  }
}
</script>

<style scoped>
.login {
  /* margin-top: 0; */
  text-align: center;
  display: flex;
}
.login-form-wrapper {
  margin: 50px auto;
  /* border: 1px solid #444; */
  /* padding: 10px; */
  /* border-radius: 15px; */
}
.form-select {
  height: 30px;
  line-height: 30px;
  display: flex;
}
.form-select-option {
  width: 50%;
  border: 1px solid #444;
  border-bottom: none;
  background-color: #ccc;
}
.form-select-option:first-child {
  border-top-left-radius: 5px;
}
.form-select-option:last-child {
  border-top-right-radius: 5px;
}
.form-select-selected {
  background-color: #aaa;
}
.login-form {
  border: 1px solid #444;
}
table {
  border-spacing: 10px 10px;
}
.login-field-row {
  /* margin-bottom: 15px; */
}
.login-field {
  padding: 2px 5px;
  height: 30px;
  font-size: 25px;
}
.submit {
  /* height: 30px; */
  padding: 5px 20px;
  line-height: 25px;
  font-size: 15px;
  border-radius: 5px;
  background-color: #fefefe;
}
</style>
