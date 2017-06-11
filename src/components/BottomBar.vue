<template>
  <div>
    <md-bottom-bar @change="onChange">
        <md-bottom-bar-item v-for="item in items" :md-icon="item.icon" :md-active="active(item)">{{ item.text }}</md-bottom-bar-item>
    </md-bottom-bar>
  </div>
</template>

<script>
import config from './../config.json'

export default {
  name: 'bottom-bar',
  data () {
    return { 
        items: config.bottomBar.items
    }
  },
  computed: {
      active () {
          return (item) => this.$store.state.title == item.text;
      }
  },
  methods: {
    onChange (index) {
      this.$router.push({ name: this.items[index].pathName })
    }
  }
}
</script>

<style scoped>

</style>
