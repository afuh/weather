import axios from 'axios';

/*
Current Weather: http://api.openweathermap.org/data/2.5/weather?q=CITY-NAME&type=accurate&APPID=YOUR-API-KEY
5 Day Forecast:
http://api.openweathermap.org/data/2.5/forecast/daily?q=CITY-NAME&type=accurate&APPID=YOUR-API-KEY&cnt=5
*/

const api = "http://api.openweathermap.org/data/2.5/weather?q=";
const options = "&units=metric&type=accurate";
const forecast = "forecast/daily?";
const apiKey = "&APPID=3ec59ef40ab368015afc3afb46c4d7bf";

// http://api.openweathermap.org/data/2.5/weather?q=berlin&units=metric&type=accurate&APPID=3ec59ef40ab368015afc3afb46c4d7bf
// http://api.openweathermap.org/data/2.5/forecast/daily?q=berlin&units=metric&type=accurate&APPID=3ec59ef40ab368015afc3afb46c4d7bf


export function getCurrent(city) {
  return axios.get(`${api}${city}${options}${apiKey}`)
    .then(current => current.data);
}

export function getForecast(city) {
  return axios.get(`${api}${forecast}${city}${options}${apiKey}&cnt=5`)
    .then(current => current.data);
}
