<template>
  <div>
    <md-list class="md-dense">
        <md-list-item @click.native="navigate('test_page_2')">
            <md-icon>list</md-icon> <span>Test page 2</span>
        </md-list-item>
        <md-list-item @click.native="navigate('test_page_3')">
            <md-icon>contacts</md-icon> <span>Test page 3</span>
        </md-list-item>
        <md-list-item @click.native="navigate('scanner')">
            <md-icon>list</md-icon> <span>Scanner</span>
        </md-list-item>
    </md-list>
  </div>
</template>

<script>
export default {
  name: 'sidenav-menu',
  data () {
    return {
    }
  },
  methods: {
    navigate (target) {
        this.$store.commit('toggleSidenav');
        this.$router.push({ name: target })
    }
  }
}
</script>

<style scoped>

</style>
