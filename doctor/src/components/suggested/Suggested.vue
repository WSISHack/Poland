
<template>
  <div>
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
        <md-table-row v-for="(row, index) in 15" :key="index">
          <md-table-cell>
            <p>Mleko słonia</p>
            <p><span class="tab-prop-1">66g</span> <span class="tab-prop-2">17g</span></p>
          </md-table-cell>
          <md-table-cell md-numeric>
            <p>10</p>
            <p class="tab-prop-3">12g</p>
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
  float: right;
}

.tab-prop-3 {
  text-decoration: underline;
  -moz-text-decoration-color: green;
  text-decoration-color: green;
}
</style>
