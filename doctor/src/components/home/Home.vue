<template>
  <div>
    <search></search>
    <div class="phone-viewport">
      <md-list class="custom-list md-triple-line">
        <md-list-item v-for="(patient, id) in patients" :key="id" @click.native="navigate()">
          <md-avatar>
            <img :src="patient.photo" alt="People">
          </md-avatar>

          <div class="md-list-text-container">
            <span>{{patient.name}}</span>
            <span>{{patient.city}}</span>
            <p>{{patient.sex}}, {{patient.age}} years old</p>
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
  name: 'home',
  created () {
    this.$store.commit('setTitle', 'Patients')
  },
  data () {
    return {
      patients: [
        {
          name: 'Minenhle Naidoo',
          age: 52,
          sex: 'female',
          city: 'Johannesburg, South Africa',
          photo: 'https://placeimg.com/40/40/people/1'
        },
        {
          name: 'Andrzej Śmieszek',
          age: 23,
          sex: 'male',
          city: 'Geneva, Switzerland',
          photo: '/static/img/fabian.8c661d7.jpg'
        },
        {
          name: 'Aditi Sodhi',
          age: 30,
          sex: 'female',
          city: 'New Delhi, India',
          photo: '/static/img/india_woman.f19342e.jpg'
        },
        {
          name: 'Krystyna Nowak',
          age: 34,
          sex: 'female',
          city: 'Gliwice, Poland',
          photo: 'https://placeimg.com/40/40/people/5'
        },
      ]
    }
  },
  methods: {
    navigate() {
      this.$router.push({ name: 'profile' });
    }
  },
  components: { Search }
}
</script>

<style scoped>

</style>
