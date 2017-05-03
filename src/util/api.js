import axios from 'axios';

const api = "http://api.openweathermap.org/data/2.5/";
const day = "weather?q=";
const forecast = "forecast/daily?q=";
const options = "&units=metric&type=accurate";
const apiKey = "&APPID=3ec59ef40ab368015afc3afb46c4d7bf";

//Get the current weather
export function getCurrent(city) {
  return axios.get(`${api}${day}${city}${options}${apiKey}`)
    .then(current => current.data)
    .catch(handleError);
}

//Get a 6 day forecast
export function getForecast(city, days = 6) {
  return axios.get(`${api}${forecast}${city}${options}${apiKey}&cnt=${days}`)
    .then(current => current.data)
    .catch(handleError);
}

//Get the location of the user
export function getCityByIp() {
  const url = "http://ip-api.com/json";
  return axios.get(url)
    .then(current => current.data)
    .catch(handleError);
}

//Export both calls
export function getWeather(city){
  return axios.all([
    getCurrent(city),
    getForecast(city),
  ]).then(data => {
    const current = data[0];
    const forecast = data[1];

    return {
      current: current,
      forecast: forecast,
    };
  })
    .catch(handleError);
}

function handleError(error){
    console.warn("T_T", error);
    return null;
}


// ==== Date ===
const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
const months = ['January','February','March','April','May','June','July','August','September','October','November','December'];

export function getDate (dt) {
  const date = new Date(dt * 1000);
  const day = days[date.getDay()];
  const month = months[date.getMonth()];

  return `${day}, ${month} ${date.getDate()}`;
}
