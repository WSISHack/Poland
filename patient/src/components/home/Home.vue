
<template>
  <div>
    <p style="color:red">
        <center><b><md-icon>warning</md-icon>Warning! Your protein level are form 
        {{proteinForDay.B_low}}g to {{proteinForDay.B_high}}g. Your current consumption is 100g! 
        </b></center>
      </p>
    <air-info></air-info>
    <charts></charts>
  </div>
</template>

<script>
import Charts from './Charts';
import AirInfo from './AirInfo';
import {proteinForDay} from '../../store/formulas.js';

export default {
  name: 'home',
  created () {
    this.$store.commit('setTitle', 'Dashboard');
  },
  data () {
    return {
    }
  },
  computed: {
    user() {
      return this.$store.getters['user/profile/user'];
    },
    proteinForDay() {
      return proteinForDay(this.user.age, this.user.weight);
    }
  },
  mounted() {
  },
  components: { Charts, AirInfo }
}
</script>

<style scoped>
</style>

