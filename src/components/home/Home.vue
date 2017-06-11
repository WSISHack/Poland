
<template>
  <div>
    <air-info></air-info>
    <charts></charts>
  </div>
</template>

<script>
import Charts from './Charts';
import AirInfo from './AirInfo';

export default {
  name: 'home',
  created () {
    this.$store.commit('setTitle', 'Dashboard')
  },
  data () {
    return {
    }
  },
  components: { Charts, AirInfo }
}
</script>

<style scoped>
</style>
