<template>
  <div>
    <div id="scanner-viewport"></div>
  </div>
</template>

<script>
import Quagga from 'quagga'

export default {
  name: 'scanner',
  created () {
  },
  mounted () {
    Quagga.init({
      inputStream : {
        name : "Live",
        type : "LiveStream",
        target: '#scanner-viewport',
      },
      decoder : {
        readers : ["ean_reader"]
      }
    }, function(err) {
        if (err) {
            console.log(err);
            return
        }

        Quagga.start();
    });

    Quagga.onDetected((data) => {
      if(!this.$store.getters['scanner/scanning']) {
        this.$store.dispatch('scanner/process', data)
          .then((barcode) => {
            this.$router.push({ name: 'product', params: { barcode: barcode } })
          })
      }
    });
  },
  beforeDestroy () {
    Quagga.stop();
  },
  data () {
    return {
    }
  },
  components: {  }
}
</script>

<style>
canvas.drawing, canvas.drawingBuffer {
    position: absolute;
    left: 0;
    top: 0;
}
</style>
