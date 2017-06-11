
<template>
  <div>
    Suggested
  </div>
</template>

<script>
export default {
  name: 'suggested',
  created () {
    this.$store.commit('setTitle', 'Suggested')
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
