<template>
  <div>
    <md-layout md-gutter md-align="center">
      <md-whiteframe class="login-form-frame">
        <login-form />
      </md-whiteframe>
    </md-layout>
  </div>
</template>

<script>
import LoginForm from './LoginForm'

export default {
  name: 'login',
  created () {
    this.$store.commit('setTitle', 'Login')
  },
  data () {
    return {
    }
  },
  components: { LoginForm }
}
</script>

<style scoped>
.login-form-frame {
  margin: 30px;
  padding: 20px;
  width: 500px;
}
</style>
