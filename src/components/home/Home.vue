
<template>
  <div>
    Test page 1<br>Test page 1<br>Test page 1<br>Test page 1<br>Test page 1<br>Test page 1<br>
    Test page 1<br>Test page 1<br>Test page 1<br>Test page 1<br>
    Test page 1<br>Test page 1<br>Test page 1<br>
  </div>
</template>

<script>
export default {
  name: 'home',
  created () {
    this.$store.commit('setTitle', 'Dashboard')
  },
  data () {
    return {
    }
  },
  components: {  }
}
</script>

<style scoped>
</style>
