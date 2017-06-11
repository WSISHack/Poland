
<template>
  <div>
      User profile
  </div>
</template>

<script>
export default {
  name: 'profile',
  created () {
    this.$store.commit('setTitle', 'Your profile');
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
