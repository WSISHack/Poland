<template>
  <div>
    	<button v-on:click="getProductById(2030)">getProductById</button><br>
    	<button v-on:click="getProducts([7610848337010, 7610849657797])">getProducts</button><br>
    	<button v-on:click="search('Guarana')">Search</button><br>
      
  </div>
</template>

<script>
import $ from 'jquery'
import keys from '../../keys.json'

export default {
  methods: {
    getProductById(id) {
      $.ajax({
        method: "GET",
        url: "https://www.openfood.ch/api/v3/products/" +id,
        dataType: 'json',
        headers: {
          "Authorization": "Token token=" + keys.openFoodKey,
        },
      }).done(function(msg) {
        console.log(msg)  ;
      });
    },
    getProducts(barcodesArray) {
      $.ajax({
        method: "GET",
        url: "https://www.openfood.ch/api/v3/products?barcodes="+barcodesArray.join(","),
        dataType: 'json',
        headers: {
          "Authorization": "Token token=" + keys.openFoodKey,
        }
      }).done(function(msg) {
        console.log(msg)  ;
      });
    },
    search(query) {
      $.ajax({
        method: "POST",
        url: "https://www.openfood.ch/api/v3/products/_search",
        dataType: 'json',
        headers: {
          "Authorization": "Token token=" + keys.openFoodKey,
        },
        data: JSON.stringify({
          "query": {
            "query_string": {
              "query" : query
            }
          }
        })
      }).done(function(msg) {
        console.log(msg)  ;
      });
    }
  }
}
</script>

<style scoped>

</style>
