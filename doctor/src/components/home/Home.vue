
<template>
  <div>
    <div class="userInfo">
      <md-card>
        <md-card-header>
          <md-card-media>
            <img src="../../assets/fabian.jpg" alt="People">
          </md-card-media>
          <md-card-header-text>
            <div class="md-title">Andrzej Śmieszek</div>
            <div class="md-subhead">Geneve, 23 years old</div>
          </md-card-header-text>
        </md-card-header>
      </md-card>
      <md-card>
        <md-card-header>
          <md-card-header-text>
            <div class="md-title">Male</div>
            <div class="md-subhead">Sex</div>
          </md-card-header-text>
        </md-card-header>
      </md-card>
      <md-card>
        <md-card-header>
          <md-card-header-text>
            <div class="md-title">173cm</div>
            <div class="md-subhead">Height</div>
          </md-card-header-text>
        </md-card-header>
      </md-card>
      <md-card>
        <md-card-header>
          <md-card-header-text>
            <div class="md-title">64kg</div>
            <div class="md-subhead">Weight</div>
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
  name: 'home',
  created () {
    this.$store.commit('setTitle', 'Dashboard')
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
