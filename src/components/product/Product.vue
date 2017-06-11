
<template>
  <div>
      <p>
        <span class="md-title">{{ productName }}</span>
      </p>
      <p>
        {{ ingredients }}
      </p>
  </div>
</template>

<script>
import getArrayOfIngredients from './../../store/scanner/getArrayOfIngredients'
import getArrayOfSymbols from './../../store/scanner/getArrayOfSymbols'

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
      productName: "-",
      ingredients: "-"
    }
  },
  components: {  },
  methods: {
    processResult (result) {
      //console.log(result);

      const product = result.data[0];

      if(product == null) {
        this.$router.push({ name: 'scanner' });
        return;
      }

      this.productName = product.display_name_translations.en;
      if(!this.productName) {
        this.productName = product.display_name_translations.de;
      }

      this.ingredients = product.ingredients_translations.en;
      if(!this.ingredients) {
        this.ingredients = product.ingredients_translations.de;

        this.$store.dispatch('scanner/translate', { text: product.ingredients_translations.de })
          .then((result) => {
            console.log(result);
            this.ingredients = result[0][0][0];


            console.log(getArrayOfIngredients(this.ingredients));
            console.log(getArrayOfSymbols(this.ingredients));
          });

        
      }
      else {
        console.log(getArrayOfIngredients(this.ingredients));
        console.log(getArrayOfSymbols(this.ingredients));
      }

    }
  }
}
</script>

<style scoped>
</style>
