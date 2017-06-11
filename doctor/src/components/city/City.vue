
<template>
  <div>
    <div class="userInfo">
      <md-card>
        <md-card-header>
          <md-card-header-text>
            <div class="md-title">Geneva</div>
            <div class="md-subhead">Switzerland</div>
          </md-card-header-text>
        </md-card-header>
      </md-card>
      <md-card>
        <md-card-header>
          <md-card-header-text>
            <div class="md-title">23 401</div>
            <div class="md-subhead">Patients</div>
          </md-card-header-text>
        </md-card-header>
      </md-card>
    </div>
    <charts></charts>
  </div>
</template>

<script>
import Charts from './Charts';

export default {
  name: 'profile',
  created () {
    this.$store.commit('setTitle', 'Geneva, Switzerland')
  },
  data () {
    return {
    }
  },
  components: { Charts }
}
</script>

<style scoped>
  .userInfo {
    display: flex;
    margin: 20px;
  }

  .userInfo > div {
    padding: 10px;
  }

</style>
