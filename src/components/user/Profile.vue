
<template>
  <div class="container">
    <form novalidate @submit.stop.prevent="submit">
      <md-input-container>
        <label>Name</label>
        <md-input v-model="user.name"></md-input>
      </md-input-container>

      <md-input-container>
        <label>Surname</label>
        <md-input v-model="user.surname"></md-input>
      </md-input-container>

      <md-input-container>
        <label>Age</label>
        <md-input v-model="user.age" type="number"></md-input>
      </md-input-container>

      <md-input-container>
        <label>Growth</label>
        <md-input v-model="user.growth"></md-input>
      </md-input-container>

      <md-input-container>
        <label>Weight</label>
        <md-input v-model="user.weight"></md-input>
      </md-input-container>

      <md-input-container>
        <label>Address</label>
        <md-input v-model="user.address"></md-input>
      </md-input-container>

      <md-input-container>
        <label>City</label>
        <md-input v-model="user.city"></md-input>
      </md-input-container>

      <md-layout md-gutter>
        <md-layout class="inline">
          <md-input-container>
            <label>State</label>
            <md-input v-model="user.state"></md-input>
          </md-input-container>
        </md-layout>
        <md-layout>
          <md-input-container>
            <label>Zip code</label>
            <md-input v-model="user.zipCode"></md-input>
          </md-input-container>
        </md-layout>
      </md-layout>

      <md-layout md-align="end">
        <md-button class="md-raised md-primary left" @click.native="save">Save</md-button>
      </md-layout>
    </form>
    <br />
  </div>
</template>

<script>
export default {
  created() {
    this.$store.commit('setTitle', 'Your profile');
  },
  
  data() {
    return {
      user: {
        name: "",
        surname: "",
        age: "",
        growth: "",
        weight: "",
        address: "",
        city: "",
        state: "",
        zipCode: ""
      }
    }
  },
  components: {  },
  methods : {
    save() {
      this.$store.dispatch('user/profile/save', this.user);
    }
  }
}
</script>

<style scoped>
  .container {
    padding-left: 16px;
    padding-right: 16px;
  }
  .inline {
    padding-right: 8px;
  }
  .left {
    margin-left: 0px;
  }
</style>
