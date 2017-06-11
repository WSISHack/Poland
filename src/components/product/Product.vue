
<template>
  <div>
      <p>
        <span class="md-title">{{ productName }}</span>
      </p>
      <p>
        Skład
      </p>
  </div>
</template>

<script>
export default {
  name: 'product',
  created () {
    this.$store.commit('setTitle', 'Product');
    console.log(this.$route);

     this.$store.dispatch('scanner/translate', { text: "lubię placki" })
        .then((result) => {
          console.log(result);
        })

  },
  data () {
    return {
      productName: "Product name"
    }
  },
  components: {  }
}
</script>

<style scoped>
</style>
