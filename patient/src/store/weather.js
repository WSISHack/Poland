import axios from 'axios';
import keys from '../keys';

export async function getWeatherByCoordinates(lat, lon) {
  const URL = 'http://api.openweathermap.org/data/2.5/weather';
  const q = `appid=${keys.openweathermapKey}&lat=${lat}&lon=${lon}&units=metric`;
  const res = await axios.get(`${URL}?${q}`);
  return res.data;
}

export async function getAirQualityIndexByCoordinates(lat, lon) {
  const URL = `https://api.waqi.info/feed`;
  const res = await axios.get(`${URL}/geo:${lat};${lon}/?token=${keys.aqicnKey}`);
  return res.data.data;
}
