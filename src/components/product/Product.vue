
<template>
  <div>
      <p style="text-align:center;">
        <span class="md-title">{{ productName }}</span>
      </p>
      <p>
        <!--{{ ingredients }}-->

        <div>
          <md-list>
            <md-list-item ref="menu">
              <md-icon>pie_chart</md-icon>
              <span>Ingredients</span>
              <md-list-expand true>
                <md-list>
                  <md-list-item class="md-inset" v-for="ingredient in ingredients">{{ingredient}} 
                    
                        <md-icon v-if="badIngredients.indexOf(ingredient) >= 0 " style="color:red">priority_high</md-icon>
                        <md-icon v-if="goodIngredients.indexOf(ingredient)  >= 0 " style="color:green">spa</md-icon>
                      
                  </md-list-item>
                </md-list>
              </md-list-expand>
            </md-list-item>

            <md-list-item>
              <md-icon>whatshot</md-icon>
              <span>Nutritional values</span>

              <md-list-expand>
                <md-list>
                  <md-table>
                    <md-table-header>
                      <md-table-row>
                        <md-table-head md-numeric></md-table-head>
                        <md-table-head md-numeric>100 ({{portionUnit}})</md-table-head>
                        <md-table-head md-numeric>{{portionQuantity}} ({{portionUnit}})</md-table-head>
                        <md-table-head md-numeric>%</md-table-head>
                      </md-table-row>
                    </md-table-header>

                    <md-table-body>
                      <md-table-row>
                        <md-table-cell>{{nutrients.energy.name_translations.en}}</md-table-cell>
                        <md-table-cell>{{nutrients.energy.per_hundred}}{{nutrients.energy.unit}}</md-table-cell>
                        <md-table-cell>{{nutrients.energy.per_portion}}{{nutrients.energy.unit}}</md-table-cell>
                        <md-table-cell>{{nutrients.energy.per_day}}{{nutrients.energy.unit}}</md-table-cell>
                      </md-table-row>


                      <md-table-row>
                        <md-table-cell>{{nutrients.energy_kcal.name_translations.en}}</md-table-cell>
                        <md-table-cell>{{nutrients.energy_kcal.per_hundred}}{{nutrients.energy_kcal.unit}}</md-table-cell>
                        <md-table-cell>{{nutrients.energy_kcal.per_portion}}{{nutrients.energy_kcal.unit}}</md-table-cell>
                        <md-table-cell>{{nutrients.energy_kcal.per_day}}{{nutrients.energy_kcal.unit}}</md-table-cell>
                      </md-table-row> 

                      <md-table-row>
                        <md-table-cell>{{nutrients.fat.name_translations.en}}</md-table-cell>
                        <md-table-cell>{{nutrients.fat.per_hundred}}{{nutrients.fat.unit}}</md-table-cell>
                        <md-table-cell>{{nutrients.fat.per_portion}}{{nutrients.fat.unit}}</md-table-cell>
                        <md-table-cell>{{nutrients.fat.per_day}}{{nutrients.fat.unit}}</md-table-cell>
                      </md-table-row> 


                      <md-table-row>
                        <md-table-cell>{{nutrients.saturated_fat.name_translations.en}}</md-table-cell>
                        <md-table-cell>{{nutrients.saturated_fat.per_hundred}}{{nutrients.saturated_fat.unit}}</md-table-cell>
                        <md-table-cell>{{nutrients.saturated_fat.per_portion}}{{nutrients.saturated_fat.unit}}</md-table-cell>
                        <md-table-cell>{{nutrients.saturated_fat.per_day}}{{nutrients.saturated_fat.unit}}</md-table-cell>
                      </md-table-row> 

                      <md-table-row>
                        <md-table-cell>{{nutrients.carbohydrates.name_translations.en}}</md-table-cell>
                        <md-table-cell>{{nutrients.carbohydrates.per_hundred}}{{nutrients.carbohydrates.unit}}</md-table-cell>
                        <md-table-cell>{{nutrients.carbohydrates.per_portion}}{{nutrients.carbohydrates.unit}}</md-table-cell>
                        <md-table-cell>{{nutrients.carbohydrates.per_day}}{{nutrients.carbohydrates.unit}}</md-table-cell>
                      </md-table-row> 


                      <md-table-row>
                        <md-table-cell>{{nutrients.sugars.name_translations.en}}</md-table-cell>
                        <md-table-cell>{{nutrients.sugars.per_hundred}}{{nutrients.sugars.unit}}</md-table-cell>
                        <md-table-cell>{{nutrients.sugars.per_portion}}{{nutrients.sugars.unit}}</md-table-cell>
                        <md-table-cell>{{nutrients.sugars.per_day}}{{nutrients.sugars.unit}}</md-table-cell>
                      </md-table-row> 

                      <md-table-row>
                        <md-table-cell>{{nutrients.fiber.name_translations.en}}</md-table-cell>
                        <md-table-cell>{{nutrients.fiber.per_hundred}}{{nutrients.fiber.unit}}</md-table-cell>
                        <md-table-cell>{{nutrients.fiber.per_portion}}{{nutrients.fiber.unit}}</md-table-cell>
                        <md-table-cell>{{nutrients.fiber.per_day}}{{nutrients.fiber.unit}}</md-table-cell>
                      </md-table-row> 


                      <md-table-row>
                        <md-table-cell>{{nutrients.protein.name_translations.en}}</md-table-cell>
                        <md-table-cell>{{nutrients.protein.per_hundred}}{{nutrients.protein.unit}}</md-table-cell>
                        <md-table-cell>{{nutrients.protein.per_portion}}{{nutrients.protein.unit}}</md-table-cell>
                        <md-table-cell>{{nutrients.protein.per_day}}{{nutrients.protein.unit}}</md-table-cell>
                      </md-table-row> 


                      <md-table-row>
                        <md-table-cell>{{nutrients.salt.name_translations.en}}</md-table-cell>
                        <md-table-cell>{{nutrients.salt.per_hundred}}{{nutrients.salt.unit}}</md-table-cell>
                        <md-table-cell>{{nutrients.salt.per_portion}}{{nutrients.salt.unit}}</md-table-cell>
                        <md-table-cell>{{nutrients.salt.per_day}}{{nutrients.salt.unit}}</md-table-cell>
                      </md-table-row> 


                    </md-table-body>
                  </md-table>
                </md-list>
              </md-list-expand>
            </md-list-item>

            <md-list-item>
              <md-icon>shopping_basket</md-icon>
              <span>Recommend</span>

              <md-list-expand>
                <md-list>
                  <md-list-item class="md-inset">Browarek</md-list-item>
                  <md-list-item class="md-inset">Wódeczka</md-list-item>
                  <md-list-item class="md-inset">Piwko</md-list-item>
                </md-list>
              </md-list-expand>
            </md-list-item>
          </md-list>
        </div>
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
    this.$store.dispatch('scanner/getProducts', [ 7611654884033 ])//90162909 ])//this.$route.params.barcode ])
      .then(this.processResult);


  



/*
     this.$store.dispatch('scanner/translate', { text: "lubię placki" })
        .then((result) => {
          console.log(result);
        })*/

  },
  mounted () {
    this.toggleFirstExpandListElem();
  },
  data () {
    return {
      productName: "-",
      ingredients: "-",
      nutrients: "-",
      portionQuantity: "-",
      portionUnit: "-",
      goodIngredients: ["raw cane sugar", "cocoa butter"],
      badIngredients: ["hazelnut paste"]
    }
  },
  components: {  },
  methods: {
    toggleFirstExpandListElem(){          
      if(this.$refs.hasOwnProperty('menu'))
        this.$refs.menu.toggleExpandList();
      else
          setTimeout(() => {
              this.toggleFirstExpandListElem()
            }, 10);
    },
    processResult (result) {

      const product = result.data[0];
      // console.log(product);

      if(product == null) {
        this.$router.push({ name: 'scanner' });
        return;
      }

      this.nutrients = product.nutrients; 
      this.portionQuantity = product.portion_quantity; 
      this.portionUnit = product.portion_unit ;


      // console.log(this.portionQuantity);
      // console.log(this.portionUnit);

      

      // console.log(this.nutrients);

      this.productName = product.display_name_translations.en;
      if(!this.productName) {
        this.productName = product.display_name_translations.de;
      }

      this.ingredients = product.ingredients_translations.en;
      if(!this.ingredients) {
        this.ingredients = product.ingredients_translations.de;

        this.$store.dispatch('scanner/translate', { text: product.ingredients_translations.de })
          .then((result) => {
            // console.log(result);
            this.ingredients = getArrayOfIngredients(result[0][0][0]);

            // console.log("test");
            // console.log(getArrayOfIngredients(this.ingredients));
            // console.log(getArrayOfSymbols(this.ingredients));
          });

        
      }
      else {
        // console.log(getArrayOfIngredients(this.ingredients));
        // console.log(getArrayOfSymbols(this.ingredients));
      }

    }
  }
}
</script>

<style scoped>
</style>
