
<template>
  <div>
    <md-layout md-gutter md-align="center" style="margin-top: 20px;">
      <span class="md-caption tab-prop-1">Protein</span>
      &nbsp;&nbsp;&nbsp;
      <span class="md-caption tab-prop-2">Carbohydrates</span>
      &nbsp;&nbsp;&nbsp;
      <span class="md-caption tab-prop-3">Fat</span>
    </md-layout>
    <md-table>
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
            <p>Cauliflower</p>
            <p><span class="tab-prop-1">2.0g</span> <span class="tab-prop-2 prop-right">2.5g</span></p>
          </md-table-cell>
          <md-table-cell md-numeric>
            <p>20</p>
            <p class="tab-prop-3">0.0g</p>
          </md-table-cell>
        </md-table-row>

        <md-table-row>
          <md-table-cell>
            <p>Spinach</p>
            <p><span class="tab-prop-1">2.8g</span> <span class="tab-prop-2 prop-right">1.5g</span></p>
          </md-table-cell>
          <md-table-cell md-numeric>
            <p>30</p>
            <p class="tab-prop-3">0.8g</p>
          </md-table-cell>
        </md-table-row>



        <md-table-row>
          <md-table-cell>
            <p>Broccoli</p>
            <p><span class="tab-prop-1">2.82g</span> <span class="tab-prop-2 prop-right">4.04g</span></p>
          </md-table-cell>
          <md-table-cell md-numeric>
            <p>30</p>
            <p class="tab-prop-3">0.37g</p>
          </md-table-cell>
        </md-table-row>

        <md-table-row>
          <md-table-cell>
            <p>Blueberries</p>
            <p><span class="tab-prop-1">0.6g</span> <span class="tab-prop-2 prop-right">12.2g</span></p>
          </md-table-cell>
          <md-table-cell md-numeric>
            <p>45</p>
            <p class="tab-prop-3">0.6g</p>
          </md-table-cell>
        </md-table-row>


        <md-table-row>
          <md-table-cell>
            <p>Fish (Atlantic cod)</p>
            <p><span class="tab-prop-1">17.8g</span> <span class="tab-prop-2 prop-right">0.0g</span></p>
          </md-table-cell>
          <md-table-cell md-numeric>
            <p>82</p>
            <p class="tab-prop-3">0.0g</p>
          </md-table-cell>
        </md-table-row>

        <md-table-row>
          <md-table-cell>
            <p>Sweet potatoes</p>
            <p><span class="tab-prop-1">1.0g</span> <span class="tab-prop-2 prop-right">18.0g</span></p>
          </md-table-cell>
          <md-table-cell md-numeric>
            <p>76</p>
            <p class="tab-prop-3">0.0g</p>
          </md-table-cell>
        </md-table-row>

        <md-table-row>
          <md-table-cell>
            <p>Walnuts</p>
            <p><span class="tab-prop-1">16.0g</span> <span class="tab-prop-2 prop-right">18.0g</span></p>
          </md-table-cell>
          <md-table-cell md-numeric>
            <p>645</p>
            <p class="tab-prop-3">60.3g</p>
          </md-table-cell>
        </md-table-row>

        <md-table-row>
          <md-table-cell>
            <p>Quinoa</p>
            <p><span class="tab-prop-1">4.0g</span> <span class="tab-prop-2 prop-right">21.0g</span></p>
          </md-table-cell>
          <md-table-cell md-numeric>
            <p>120</p>
            <p class="tab-prop-3">2.0g</p>
          </md-table-cell>
        </md-table-row>


      </md-table-body>
    </md-table>
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
.tab-prop-1 {
  text-decoration: underline;
  -moz-text-decoration-color: red;
  text-decoration-color: red;
}

.tab-prop-2 {
  text-decoration: underline;
  -moz-text-decoration-color: blue;
  text-decoration-color: blue;
}

.prop-right {
  float: right;
}

.tab-prop-3 {
  text-decoration: underline;
  -moz-text-decoration-color: green;
  text-decoration-color: green;
}
</style>
