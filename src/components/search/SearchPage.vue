<template>
  <div>
    <search-form></search-form>
    <scanner></scanner>
  </div>
</template>

<script>
import SearchForm from './SearchForm'
import Scanner from './Scanner'

export default {
  name: 'search-page',
  created () {
    this.$store.commit('setTitle', 'Scan')
  },
  data () {
    return {
    }
  },
  components: 
  { 
    SearchForm,
    Scanner 
  }
}
</script>

<style scoped>
</style>
