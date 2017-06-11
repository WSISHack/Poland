<template>
  <div>
    <form novalidate @submit.stop.prevent="submit">
      <md-input-container v-bind:class="{ 'md-input-invalid': emailBlured && !this.$store.getters['user/loginForm/emailValid'] }">
        <label>Email</label>
        <md-input @input="updateEmail" @blur.native="emailBlur" type="email"></md-input>
        <span class="md-error">Email is required</span>
      </md-input-container>

      <md-input-container v-bind:class="{ 'md-input-invalid': passBlured && !$store.getters['user/loginForm/passwordValid'] }">
        <label>Password</label>
        <md-input @input="updatePassword" @blur.native="passBlur" type="password"></md-input>
        <span class="md-error">Password is required</span>
      </md-input-container>

      <md-button class="md-raised md-primary" @click.native="login">Login</md-button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'login-form',
  data () {
    return {
      emailBlured: false,
      passBlured: false
    }
  },
  methods: {
    updateEmail (value) {
      this.$store.dispatch('user/loginForm/updateEmail', value)
    },
    updatePassword (value) {
      this.$store.dispatch('user/loginForm/updatePassword', value)
    },
    emailBlur() {
      this.emailBlured = true;
    },
    passBlur() {
      this.passBlured = true;
    },
    login() {
      this.emailBlured = true;
      this.passBlured = true;
      
      const valid = this.$store.getters['user/loginForm/valid'];

      if(!valid) {
        this.$store.commit('openDialog', {
          title: "Error",
          content: "Invalid"
        });
      }
      else {
        this.$store.dispatch('user/login').then((result) => {
          setTimeout(() => this.$router.push({ name: 'home' }), 0);
        }).catch(error => {
          this.$store.commit('openDialog', {
            title: "Error",
            content: error
          });
        });
      }

      
    }
  }
}
</script>

<style scoped>

</style>
