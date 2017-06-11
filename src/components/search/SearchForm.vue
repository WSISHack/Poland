<template>
  <div>
    <md-whiteframe class="search-form-frame">
        <md-input-container>
            <label>Search by barcode or name</label>
            <md-input></md-input>
            <md-icon>search</md-icon>
        </md-input-container>
    </md-whiteframe>
  </div>
</template>

<script>
export default {
  name: 'search-form',
  created () {

  },
  data () {
    return {
    }
  },
  components: {  }
}
</script>

<style scoped>
.search-form-frame {
    padding-bottom: 10px;
    padding-right: 20px;
}

.md-input-container {
    margin: 0 0 0 10px;
}
</style>
