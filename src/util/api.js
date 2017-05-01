import axios from 'axios';

/*
Current Weather: http://api.openweathermap.org/data/2.5/weather?q=CITY-NAME&type=accurate&APPID=YOUR-API-KEY
5 Day Forecast:
http://api.openweathermap.org/data/2.5/forecast/daily?q=CITY-NAME&type=accurate&APPID=YOUR-API-KEY&cnt=5
*/

const api = "http://api.openweathermap.org/data/2.5/";
const day = "weather?q=";
const forecast = "forecast/daily?q=";
const options = "&units=metric&type=accurate";
const apiKey = "&APPID=3ec59ef40ab368015afc3afb46c4d7bf";

export function getCurrent(city) {
  return axios.get(`${api}${day}${city}${options}${apiKey}`)
    .then(current => current.data)
    .catch(handleError);
}

export function getForecast(city, days = 6) {
  return axios.get(`${api}${forecast}${city}${options}${apiKey}&cnt=${days}`)
    .then(current => current.data)
    .catch(handleError);
}

export function getCityByIp() {
  const url = "http://ip-api.com/json";
  return axios.get(url)
    .then(current => current.data)
    .catch(handleError);
}

function handleError(error){
    console.warn("T_T", error);
    return null;
}



// ==== Date ===
(function(){
  const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
  const months = ['January','February','March','April','May','June','July','August','September','October','November','December'];

  Date.prototype.getMonthName = function() {
    return months[ this.getMonth()];
    };
  Date.prototype.getDayName = function(n = 0) {
    return days[ this.getDay() + n];
    };
})();

export function getDate (n) {
  const date = new Date();
  const day = date.getDayName(n);
  const month = date.getMonthName();

  return `${day}, ${month} ${date.getDate() + n}`;
}
