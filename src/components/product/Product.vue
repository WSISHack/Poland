
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
    this.$store.dispatch('scanner/getProducts', [ this.$route.params.barcode ])
      .then(this.processResult);
/*
     this.$store.dispatch('scanner/translate', { text: "lubię placki" })
        .then((result) => {
          console.log(result);
        })*/

  },
  data () {
    return {
      productName: "-"
    }
  },
  components: {  },
  methods: {
    processResult (result) {
      console.log(result);

      const product = result.data[0];

      this.productName = product.display_name_translations.en;
      if(!this.productName) {
        this.productName = product.display_name_translations.de;
      }

    }
  }
}
</script>

<style scoped>
</style>
