<template>
  <md-card class="container">
    <md-card-header>
      <md-card-header-text>
        <div class="md-title">Search</div>
      </md-card-header-text>
    </md-card-header>
    <md-card-content>
      <form novalidate @submit.stop.prevent="submit" class="search">
        <md-input-container class="search__item">
          <label>eg. Geneva</label>
          <md-input placeholder="Name"></md-input>
        </md-input-container>
      </form>
    </md-card-content>
  </md-card>
</template>

<script>

export default {
  name: 'search-cities'
}
</script>

<style scoped>
  .container {
    margin: 20px;
  }

  .search {
    display: flex;
  }

  .search__item {
    margin: 10px;
  }
</style>
