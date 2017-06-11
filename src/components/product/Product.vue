
<template>
  <div>
    Product page
  </div>
</template>

<script>
export default {
  name: 'product',
  created () {
    this.$store.commit('setTitle', 'Product');
    console.log(this.$route);
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
