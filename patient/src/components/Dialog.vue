<template>
  <div>
    <md-dialog md-open-from="#custom" md-close-to="#custom" ref="globalDialog" :md-click-outside-to-close="$store.state.dialog.clickOutToClose">
        <md-dialog-title>{{ $store.state.dialog.title }}</md-dialog-title>

        <md-dialog-content>{{ $store.state.dialog.content }}</md-dialog-content>

        <md-dialog-actions>
            <md-button class="md-primary" @click.native="close">Ok</md-button>
        </md-dialog-actions>
    </md-dialog>
  </div>
</template>

<script>
export default {
  name: 'global-dialog',
  mounted () {
    this.$store.commit('setDialogRef', this.$refs.globalDialog)
  },
  data () {
    return {
    }
  },
  methods: {
      close() {
          this.$store.commit('closeDialog');
      }
  }
}
</script>

<style scoped>

</style>
