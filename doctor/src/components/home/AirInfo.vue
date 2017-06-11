<template>
  <md-card class="air-info">
    <md-card-content>
      <md-card-media class="icons">
        <div>
          <md-icon class="md-size-2x md-warn red">warning</md-icon>
          Air Pollution {{pollution}}
        </div>
        <div>
          <md-icon class="md-size-2x md-primary">bubble_chart</md-icon>
          Humidity {{humidity}}
        </div>
      </md-card-media>
    </md-card-content>
  </md-card>
</template>

<script>
  import LineChart from './LineChart.js';
  import { getAirQualityIndexByCoordinates } from '../../store/weather.js';
  import { getWeatherByCoordinates } from '../../store/weather.js';

  export default {
    name: 'air-info',
    components: {
      LineChart
    },
    data () {
      return {
        pollution: '',
        humidity: ''
      }
    },
    mounted () {
      getAirQualityIndexByCoordinates(46.202589, 6.141942)
        .then((data) => this.pollution = `${data.aqi}%`)
        .catch(() => this.pollution = '73%');
      getWeatherByCoordinates(46.202589, 6.141942)
        .then((data) => this.humidity = `${data.main.humidity}%`)
        .catch(() => this.pollution = '57%');
    },
    methods: {
      setChart(type){
        this.chart = type;
      }
    }
  }
</script>

<style scoped>
  .air-info {
    margin: 10px;
  }

  .icons {
    display: flex;
    justify-content: space-between;
  }

  .icons div {
    margin: 3px;
  }
</style>