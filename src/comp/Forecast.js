import React from 'react';
import PropTypes from "prop-types";

import {getCurrent, getForecast} from "../util/api"

const forecast = (props) => {
  return (
    <div>Forecast!!</div>
    )
}

export default forecast;


// forecast.propTypes = {
//   props: PropTypes.string.isRequired,
// }
//

//
// getCurrent(city).then(data => {
//   const datos = {
//     city: data.name,
//     country: data.sys.country,
//     description: data.weather[0].description,
//     temp: Math.round(data.main.temp),
//     min: data.main.temp_min,
//     max: data.main.temp_max,
//     humidity: data.main.humidity
//   };
//   console.log(datos)
// })
