<template>
 <div class="container">
    <form novalidate @submit.stop.prevent="submit">
      <md-input-container>
        <label>Blood glucose level (mg/dl)</label>
        <md-input v-model="medInfo.glucose"></md-input>
      </md-input-container>

      <label class="label">Blood pressure</label>      
      <md-layout md-gutter>
        <md-layout class="inline">
          <md-input-container>
            <label>Systolic</label>
            <md-input v-model="medInfo.pressure.systolic" type="number"></md-input>
          </md-input-container>
        </md-layout>
        <md-layout>
          <md-input-container>
            <label>Diastolic</label>
            <md-input v-model="medInfo.pressure.diastolic" type="number"></md-input>
          </md-input-container>
        </md-layout>
      </md-layout>

      <!--Save button-->
      <md-layout md-align="end">
        <md-button class="md-raised md-primary left" @click.native="save">Save</md-button>
      </md-layout>
    </form>
    <br />
  </div>
</template>

<script>

export default {
  created() {
    this.$store.commit('setTitle', 'Medi Info');
  },
  data() {
    return {}
  },
  computed: {
    medInfo() {
      return this.$store.getters['medInfo/medInfo'];
    }
  },
  components: {},
  methods: {
    save () {
      this.$store.dispatch('medInfo/save', this.medInfo);
    }
  }
}
</script>

<style scoped>
  .container {
    padding-left: 16px;
    padding-right: 16px;
  }
  .label {
    width: 100%;
    min-height: 48px;
    padding-top: 16px;
    display: -ms-flexbox;
    display: flex;
    position: relative;
    border: none;
    background: none;
    color: rgba(0,0,0,.54);
    font-family: inherit;
    font-size: 16px;
  }
</style>
