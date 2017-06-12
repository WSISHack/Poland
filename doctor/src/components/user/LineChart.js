import { Line, mixins } from 'vue-chartjs';

export default Line.extend({
  mixins: [mixins.reactiveProp],
  props: ['chartData', 'options'],
  mounted () {
    this.renderChart(this.chartData, {
      legend: {
        labels: {
          boxWidth: 3
        }
      }
    });
  }
});
