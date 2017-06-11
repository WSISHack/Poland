  import $ from "jquery"
  import keys from "../keys"

  function getWeatherByCoordinates(lat, lon) {
    $.get( "http://api.openweathermap.org/data/2.5/weather", 
    { 
      lat: lat, 
      lon: lon, 
      units: "metric", 
      appid: keys.openweathermapKey
    }).done(function( n ) {
      console.log(n);
  });
}

export default getWeatherByCoordinates;