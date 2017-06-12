<template>
  <md-card class="container">
    <md-card-content
      <div class="charts">
        <line-chart :height="300" :options="options" :chartData="chartData"></line-chart>
      </div>

      <md-button-toggle md-single class="md-primary">
        <md-layout><md-button class="buttons" @click.native="setChart('macros')">Macros</md-button></md-layout>
        <md-layout><md-button class="buttons" @click.native="setChart('measurement')">Measurement</md-button></md-layout>
        <md-layout><md-button class="buttons" @click.native="setChart('air')">Air</md-button></md-layout>
      </md-button-toggle>

    </md-card-content>
  </md-card>
</template>

<script>
  import LineChart from './LineChart.js'

  const data = {
    measurement: {
      labels: ['11.05.2017', '16.05.2017', '21.05.2017', '26.05.2017', '31.05.2017', '06.05.2017', '11.06.2017'],
      datasets: [
        {
          label: 'Blood pressure',
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
          data: [80, 91, 101, 78, 50, 110, 95, 100]
        }
      ]
    }
  };

  export default {
    name: 'charts',
    components: {
      LineChart
    },
    data () {
      return {
        chartData: data.macros,
        options: {
          legend: {
            labels: {
              boxWidth: 3
            }
          }
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
    margin: 10px;
  }

  .charts {
    max-width: 600px;
    margin:  10px;
  }

  .buttons {
    margin-left:4px; margin-right:4px;
  }

  
</style>