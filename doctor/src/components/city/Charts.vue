<template>
  <div class="container">
    <md-card class="chart">
      <md-card-header>
        <md-card-header-text>
          <div class="md-title">
            <md-icon class="md-size-2x md-primary">device_hub</md-icon>
            Macros (average)
          </div>
        </md-card-header-text>
      </md-card-header>
      <md-card-content
        <line-chart :height="300" :chartData="chartData.macros"></line-chart>
      </md-card-content>
    </md-card>
    <md-card class="chart">
      <md-card-header>
        <md-card-header-text>
          <div class="md-title">
            <md-icon class="md-size-2x md-primary">timer</md-icon>
            Measurement (average)
          </div>
        </md-card-header-text>
      </md-card-header>
      <md-card-content
        <line-chart :height="300" :chartData="chartData.measurement"></line-chart>
      </md-card-content>
    </md-card>
    <md-card class="chart">
      <md-card-header>
        <md-card-header-text>
          <div class="md-title">
            <md-icon class="md-size-2x md-primary">wb_cloudy</md-icon>
            Air (average)
          </div>
        </md-card-header-text>
      </md-card-header>
      <md-card-content
        <line-chart :height="300" :chartData="chartData.air"></line-chart>
      </md-card-content>
    </md-card>
  </div>
</template>

<script>
  import LineChart from './LineChart.js'

  const data = {
    measurement: {
      labels: ['11.05.2017', '16.05.2017', '21.05.2017', '26.05.2017', '31.05.2017', '06.05.2017', '11.06.2017'],
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
      labels: ['11.05.2017', '16.05.2017', '21.05.2017', '26.05.2017', '31.05.2017', '06.05.2017', '11.06.2017'],
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
      labels: ['11.05.2017', '16.05.2017', '21.05.2017', '26.05.2017', '31.05.2017', '06.05.2017', '11.06.2017'],
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
        },
        {
          label: 'Carbohydrates',
          borderColor: 'green',
          fill: false,
          data: [30, 41, 44, 45, 35, 50, 24, 30]
        },
        {
          label: 'Protein',
          borderColor: 'red',
          fill: false,
          data: [50, 51, 53, 54, 50, 60, 61, 57]
        }
      ]
    }
  }

  export default {
    name: 'charts',
    components: {
      LineChart
    },
    data () {
      return {
        chartData: {
          macros: data.macros,
          measurement: data.measurement,
          air: data.air
        }
      }
    },
    methods: {
      setChart(type){
        this.chartData = data[type];
      }
    }
  }
</script>

<style scoped>
  .container {
    display: flex;
    margin: 20px;
  }
  .chart {
    max-width: 600px;
    padding: 20px;
  }
</style>