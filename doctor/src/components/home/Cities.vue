<template>
  <div>
    <search></search>
    <div class="phone-viewport">
      <md-list class="md-double-line">
        <md-list-item v-for="city in cities" @click.native="navigate()" class="md-inset">
          <div class="md-list-text-container">
            <span>{{city.name}}</span>
            <span>Patients: {{city.patients}}</span>
          </div>

          <md-divider class="md-inset"></md-divider>
        </md-list-item>

      </md-list>
    </div>
  </div>
</template>

<script>
import Search from './Search';

export default {
  name: 'cities',
  created () {
    this.$store.commit('setTitle', 'Patients')
  },
  data () {
    return {
      cities: [
        {
          name: 'Johannesburg, South Africa',
          patients: '254'
        },
        {
          name: 'Geneva, Switzerland',
          patients: '25 435'
        },
        {
          name: 'Gliwice, Poland',
          patients: '1402'
        },
      ]
    }
  },
  methods: {
    navigate() {
      this.$router.push({ name: 'city' });
    }
  },
  components: { Search }
}
</script>

<style scoped>

</style>
