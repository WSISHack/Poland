
<template>
  <div>
      <p style="text-align:center;">
        <span class="md-title">{{ productName }}</span>
      </p>
      <p style="color:red" v-if="showWarning">
        <center><b><md-icon>warning</md-icon>Warning! This product contains some unhealthy ingredients!</b></center>
      </p>
      <p>
        <!--{{ ingredients }}-->

        <div>
          <md-list>
            <md-list-item ref="menu">
              <md-icon>pie_chart</md-icon>
              <span><b>Ingredients</b></span>
              <md-list-expand true>
                <md-list>
                  <md-list-item v-if="ingredients" class="md-inset" v-for="(ingredient, id) in ingredients" :key="id"><p style="font-size:14px">{{ingredient}}</p> 
                    
                        <md-icon v-if="badIngredients.indexOf(ingredient) >= 0 " style="color:red">priority_high</md-icon>
                        <md-icon v-if="goodIngredients.indexOf(ingredient)  >= 0 " style="color:green">spa</md-icon>
                        <md-icon v-if="miscellaneousIngredients.indexOf(ingredient) >= 0 " style="color:#FFD600">help</md-icon>
       
                  </md-list-item>
                </md-list>
              </md-list-expand>
            </md-list-item>

            <md-list-item>
              <md-icon>whatshot</md-icon>
              <span><b>Nutritional values</b></span>

              <md-list-expand>
                <md-list>
                  <md-table>
                    <md-table-header>
                      <md-table-row>
                        <md-table-head></md-table-head>
                        <md-table-head md-numeric style="text-align: center">100 ({{portionUnit}})</md-table-head>
                        <!--<md-table-head md-numeric style="text-align: center">{{portionQuantity}} ({{portionUnit}})</md-table-head>-->
                        <!--<md-table-head md-numeric style="text-align: center">%</md-table-head>-->
                      </md-table-row>
                    </md-table-header>

                    <md-table-body>
                      <md-table-row v-if="nutrients.energy">
                        <md-table-cell>{{nutrients.energy.name_translations.en}}</md-table-cell>
                        <md-table-cell style="text-align: center">{{nutrients.energy.per_hundred}}{{nutrients.energy.unit}}</md-table-cell>
                        <!--<md-table-cell style="text-align: center">{{nutrients.energy.per_portion}}{{nutrients.energy.unit}}</md-table-cell>
                        <md-table-cell style="text-align: center">{{nutrients.energy.per_day}}{{nutrients.energy.unit}}</md-table-cell>-->
                      </md-table-row>


                      <md-table-row v-if="nutrients.energy_kcal">
                        <md-table-cell>{{nutrients.energy_kcal.name_translations.en}}</md-table-cell>
                        <md-table-cell style="text-align: center">{{nutrients.energy_kcal.per_hundred}}{{nutrients.energy_kcal.unit}}</md-table-cell>
                        <!--<md-table-cell style="text-align: center">{{nutrients.energy_kcal.per_portion}}{{nutrients.energy_kcal.unit}}</md-table-cell>
                        <md-table-cell style="text-align: center">{{nutrients.energy_kcal.per_day}}{{nutrients.energy_kcal.unit}}</md-table-cell>-->
                      </md-table-row> 

                      <md-table-row v-if="nutrients.fat">
                        <md-table-cell>{{nutrients.fat.name_translations.en}}</md-table-cell>
                        <md-table-cell style="text-align: center">{{nutrients.fat.per_hundred}}{{nutrients.fat.unit}}</md-table-cell>
                        <!--<md-table-cell style="text-align: center">{{nutrients.fat.per_portion}}{{nutrients.fat.unit}}</md-table-cell>
                        <md-table-cell style="text-align: center">{{nutrients.fat.per_day}}{{nutrients.fat.unit}}</md-table-cell>-->
                      </md-table-row> 


                      <md-table-row v-if="nutrients.saturated_fat">
                        <md-table-cell>{{nutrients.saturated_fat.name_translations.en}}</md-table-cell>
                        <md-table-cell style="text-align: center">{{nutrients.saturated_fat.per_hundred}}{{nutrients.saturated_fat.unit}}</md-table-cell>
                        <!--<md-table-cell style="text-align: center">{{nutrients.saturated_fat.per_portion}}{{nutrients.saturated_fat.unit}}</md-table-cell>
                        <md-table-cell style="text-align: center">{{nutrients.saturated_fat.per_day}}{{nutrients.saturated_fat.unit}}</md-table-cell>-->
                      </md-table-row> 

                      <md-table-row v-if="nutrients.carbohydrates">
                        <md-table-cell>{{nutrients.carbohydrates.name_translations.en}}</md-table-cell>
                        <md-table-cell style="text-align: center">{{nutrients.carbohydrates.per_hundred}}{{nutrients.carbohydrates.unit}}</md-table-cell>
                        <!--<md-table-cell style="text-align: center">{{nutrients.carbohydrates.per_portion}}{{nutrients.carbohydrates.unit}}</md-table-cell>
                        <md-table-cell style="text-align: center">{{nutrients.carbohydrates.per_day}}{{nutrients.carbohydrates.unit}}</md-table-cell>-->
                      </md-table-row> 


                      <md-table-row v-if="nutrients.sugars">
                        <md-table-cell>{{nutrients.sugars.name_translations.en}}</md-table-cell>
                        <md-table-cell style="text-align: center">{{nutrients.sugars.per_hundred}}{{nutrients.sugars.unit}}</md-table-cell>
                        <!--<md-table-cell style="text-align: center">{{nutrients.sugars.per_portion}}{{nutrients.sugars.unit}}</md-table-cell>
                        <md-table-cell style="text-align: center">{{nutrients.sugars.per_day}}{{nutrients.sugars.unit}}</md-table-cell>-->
                      </md-table-row> 

                      <md-table-row v-if="nutrients.fiber">
                        <md-table-cell>{{nutrients.fiber.name_translations.en}}</md-table-cell>
                        <md-table-cell style="text-align: center">{{nutrients.fiber.per_hundred}}{{nutrients.fiber.unit}}</md-table-cell>
                        <!--<md-table-cell style="text-align: center">{{nutrients.fiber.per_portion}}{{nutrients.fiber.unit}}</md-table-cell>
                        <md-table-cell style="text-align: center">{{nutrients.fiber.per_day}}{{nutrients.fiber.unit}}</md-table-cell>-->
                      </md-table-row> 


                      <md-table-row v-if="nutrients.protein">
                        <md-table-cell>{{nutrients.protein.name_translations.en}}</md-table-cell>
                        <md-table-cell style="text-align: center">{{nutrients.protein.per_hundred}}{{nutrients.protein.unit}}</md-table-cell>
                        <!--<md-table-cell style="text-align: center">{{nutrients.protein.per_portion}}{{nutrients.protein.unit}}</md-table-cell>
                        <md-table-cell style="text-align: center">{{nutrients.protein.per_day}}{{nutrients.protein.unit}}</md-table-cell>-->
                      </md-table-row> 


                      <md-table-row v-if="nutrients.salt">
                        <md-table-cell>{{nutrients.salt.name_translations.en}}</md-table-cell>
                        <md-table-cell style="text-align: center">{{nutrients.salt.per_hundred}}{{nutrients.salt.unit}}</md-table-cell>
                        <!--<md-table-cell style="text-align: center">{{nutrients.salt.per_portion}}{{nutrients.salt.unit}}</md-table-cell>
                        <md-table-cell style="text-align: center">{{nutrients.salt.per_day}}{{nutrients.salt.unit}}</md-table-cell>-->
                      </md-table-row> 


                    </md-table-body>
                  </md-table>
                </md-list>
              </md-list-expand>
            </md-list-item>

            <md-list-item>
              <md-icon>shopping_basket</md-icon>
              <span><b>Recommend</b></span>

              <md-list-expand>
                
                <md-list>

                  <md-layout md-gutter md-align="center" style="margin-top: 20px;">
                    <span class="md-caption tab-prop-1">Protein</span>
                    &nbsp;&nbsp;&nbsp;
                    <span class="md-caption tab-prop-2">Carbohydrates</span>
                    &nbsp;&nbsp;&nbsp;
                    <span class="md-caption tab-prop-3">Fat</span>
                  </md-layout>

                      <md-table v-if="product.barcode == 54491472">
                        <md-table-header>
                          <md-table-row>
                            <md-table-head>
                              Product
                            </md-table-head>
                            <md-table-head md-numeric>
                              Calories (g)
                            </md-table-head>
                          </md-table-row>
                        </md-table-header>

                        <md-table-body>
                          <md-table-row>
                            <md-table-cell>
                              <p>Apéritiv tonic water <md-icon style="font-size:22px; color:green;">local_hospital</md-icon> <md-icon style="font-size:22px; color:blue;">people</md-icon></p> 
                              <p><span class="tab-prop-1">0.0g</span>
                              <br /><br />
                              <span class="tab-prop-2">8g</span></p>
                            </md-table-cell>
                            <md-table-cell md-numeric>
                              <p>32</p>
                              <p class="tab-prop-3">0.0g</p>
                            </md-table-cell>
                          </md-table-row>

                          <md-table-row>
                            <md-table-cell>
                              <p>Orangina: mit fruchtfleisch <md-icon style="font-size:22px; color:green;">local_hospital</md-icon></p>
                              <p>
                                <span class="tab-prop-1">0.1g</span>
                                <br /><br />
                                <span class="tab-prop-2">8.9g</span>
                              </p>
                            </md-table-cell>
                            <md-table-cell md-numeric>
                              <p>39</p>
                              <p class="tab-prop-3">0.0g</p>
                            </md-table-cell>
                          </md-table-row>

                          <md-table-row>
                            <md-table-cell>
                              <p>Gingo: ginger + lemon <md-icon style="font-size:22px; color:blue;">people</md-icon></p>
                              <p><span class="tab-prop-1">0.0g</span>
                              <br /><br />
                              <span class="tab-prop-2">11.25g</span></p>
                            </md-table-cell>
                            <md-table-cell md-numeric>
                              <p>110</p>
                              <p class="tab-prop-3">0.0g</p>
                            </md-table-cell>
                          </md-table-row>
                        </md-table-body>
                      </md-table>

                      <md-table v-if="product.barcode == 5000159461122">
                        <md-table-header>
                          <md-table-row>
                            <md-table-head>
                              Product
                            </md-table-head>
                            <md-table-head md-numeric>
                              Calories (g)
                            </md-table-head>
                          </md-table-row>
                        </md-table-header>

                          <md-table-row>
                            <md-table-cell>
                              <p>Alnatura marzipan zarbitter <md-icon style="font-size:22px; color:green;">local_hospital</md-icon> <md-icon style="font-size:22px; color:blue;">people</md-icon></p>
                              <p><span class="tab-prop-1">7.2g</span>
                              <br /><br />
                              <span class="tab-prop-2">49.0g</span></p>
                            </md-table-cell>
                            <md-table-cell md-numeric>
                              <p>490</p>
                              <p class="tab-prop-3">28.0g</p>
                            </md-table-cell>
                          </md-table-row>

                        <md-table-body>
                          <md-table-row>
                            <md-table-cell>
                              <p>Alnatura amaranth <md-icon style="font-size:22px; color:green;">local_hospital</md-icon></p>
                              <p><span class="tab-prop-1">7.7g</span>
                              <br /><br />
                              <span class="tab-prop-2">50.0g</span></p>
                            </md-table-cell>
                            <md-table-cell md-numeric>
                              <p>484</p>
                              <p class="tab-prop-3">26.0g</p>
                            </md-table-cell>
                          </md-table-row>

                          <md-table-row>
                            <md-table-cell>
                              <p>Balisto muesli goût noisettes raisins biscuit aux céréales<md-icon style="font-size:22px; color:blue;">people</md-icon></p>
                              <p><span class="tab-prop-1">6.7g</span>
                              <br /><br />
                              <span class="tab-prop-2">59.8g</span></p>
                            </md-table-cell>
                            <md-table-cell md-numeric>
                              <p>508</p>
                              <p class="tab-prop-3">26.1g</p>
                            </md-table-cell>
                          </md-table-row>
                        </md-table-body>
                      </md-table>
                    
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

const badIngredients = ["E 338", "E 150d", "emulsifier", "palm fat"];

export default {
  name: 'product',
  created () {
    this.$store.commit('setTitle', 'Product');
    this.$store.dispatch('scanner/getProducts', [ this.$route.params.barcode ])
      .then(this.processResult);
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
      product: null,
      goodIngredients: ["whey powder", "cocoa butter", "water"],
      miscellaneousIngredients: ["including caffeine", "sugar", "salt", "glucose syrup", "peanuts", "lactose"],
      badIngredients: badIngredients,
      showWarning: false,
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

      if(product == null) {
        this.$router.push({ name: 'scanner' });
        return;
      }

      this.product = product;

      this.nutrients = product.nutrients; 
      console.log(product);
      if(product.barcode == 54491472)
      {
          this.nutrients.fat = {};
          this.nutrients.fat.name_translations = {}
          this.nutrients.fat.name_translations.en = "Fat";
          this.nutrients.fat.per_hundred = 0;


          this.nutrients.saturated_fat = {};  
          this.nutrients.saturated_fat.name_translations = {}
          this.nutrients.saturated_fat.name_translations.en = "Saturated fat	";
          this.nutrients.saturated_fat.per_hundred = 0;


          this.nutrients.fiber = {};
          this.nutrients.fiber.name_translations = {}
          this.nutrients.fiber.name_translations.en = "Fiber";
          this.nutrients.fiber.per_hundred = 0;



          this.nutrients.protein = {};
          this.nutrients.protein.name_translations = {}
          this.nutrients.protein.name_translations.en = "Protein";
          this.nutrients.protein.per_hundred = 0;

          
          this.nutrients.salt = {};
          this.nutrients.salt.name_translations = {}
          this.nutrients.salt.name_translations.en = "Salt";
          this.nutrients.salt.per_hundred = 0;
          
          
      }

      this.portionQuantity = product.portion_quantity; 
      this.portionUnit = product.portion_unit ;

      this.productName = product.display_name_translations.en;
      if(!this.productName) {
        this.productName = product.display_name_translations.de;
      }

      this.ingredients = product.ingredients_translations.en;
      if(!this.ingredients) {
        this.ingredients = product.ingredients_translations.de;

        if(!this.ingredients)
          this.ingredients = product.ingredients_translations.fr;

        // console.log("tmp", product.ingredients_translations);
        var that = this;
        this.$store.dispatch('scanner/translate', { text: this.ingredients })
          .then((result) => {
            this.ingredients = getArrayOfIngredients(result[0][0][0]);
            
            var fixes = ["dye", "acidifier"];

            fixes.forEach(function(fix) {
              var index = this.ingredients.indexOf(fix);
              if (index > -1) {
                  this.ingredients.splice(index, 1);
              }
            }, this);
            

            this.ingredients = this.ingredients.concat(getArrayOfSymbols(result[0][0][0]));
            this.ingredients.forEach(function(ing) {
              console.log(that);
              if(badIngredients.indexOf(ing) >= 0)
                that.showWarning = true;
            });
          });
      }
      else {
            this.ingredients_tmp = getArrayOfIngredients(this.ingredients);
            this.ingredients = this.ingredients_tmp.concat(getArrayOfSymbols(this.ingredients));

      }

    }
  }
}
</script>
<style scoped>

.tab-prop-1 {
  text-decoration: underline;
  -moz-text-decoration-color: red;
  text-decoration-color: red;
}

.tab-prop-2 {
  text-decoration: underline;
  -moz-text-decoration-color: blue;
  text-decoration-color: blue;
  float: right;
}

.tab-prop-3 {
  text-decoration: underline;
  -moz-text-decoration-color: green;
  text-decoration-color: green;
}

</style>
