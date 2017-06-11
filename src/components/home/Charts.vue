<template>
  <md-card class="container">
    <md-card-content
      <div class="charts">
        <line-chart height="300" v-show="chart === 'macros'" :data="macros"></line-chart>
        <line-chart height="300" v-show="chart === 'measurement'" :data="measurement"></line-chart>
        <line-chart height="300" v-show="chart === 'air'" :data="air"></line-chart>
      </div>
      <div class="buttons">
        <md-button class="md-raised md-primary" @click.native="setChart('macros')">MACROS</md-button>
        <md-button class="md-raised md-accent" @click.native="setChart('measurement')">Measurement</md-button>
        <md-button class="md-raised md-warn" @click.native="setChart('air')">Air</md-button>
      </div>
    </md-card-content>
  </md-card>
</template>

<script>
  import LineChart from './LineChart.js'

  export default {
    name: 'charts',
    components: {
      LineChart
    },
    data () {
      return {
        chart: 'macros',
        measurement: {
          labels: ['11.05.2017', '21.05.2017', '31.05.2017', '11.06.2017'],
          datasets: [
            {
              label: 'Blood presure',
              borderColor: 'red',
              fill: false,
              data: [120, 125, 120, 130, 133, 128, 130, 131]
            },
            {
              label: 'Glucose level',
              borderColor: 'blue',
              fill: false,
              data: [123, 126, 121, 118, 116, 113, 114, 112]
            }
          ]
        },
        air: {
          labels: ['11.05.2017', '21.05.2017', '31.05.2017', '11.06.2017'],
          datasets: [
            {
              label: 'Pollution',
              borderColor: 'black',
              fill: false,
              data: [30, 34, 31, 45, 46, 55, 57, 43]
            },
            {
              label: 'Humidity',
              borderColor: 'blue',
              fill: false,
              data: [60, 57, 55, 70, 71, 74, 53, 55]
            }
          ]
        },
        macros: {
          labels: ['11.05.2017', '21.05.2017', '31.05.2017', '11.06.2017'],
          datasets: [
            {
              label: 'Fat',
              borderColor: 'black',
              fill: false,
              data: [30, 34, 31, 45, 46, 55, 57, 43]
            },
            {
              label: 'Sugar',
              borderColor: 'blue',
              fill: false,
              data: [60, 57, 55, 70, 71, 74, 53, 55]
            }
          ]
        }
      }
    },
    methods: {
      setChart(type){
        this.chart = type;
      }
    }
  }
</script>

<style scoped>
  .container {
    margin: 10px;
  }

  .charts {
    max-width: 600px;
    margin:  10px;
  }

  .buttons {
    text-align: center;
  }
</style>