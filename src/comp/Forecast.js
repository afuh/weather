import React from 'react';
import PropTypes from "prop-types";
import queryString from 'query-string';

import Week from "./Week"
import { getForecast } from "../util/api"

class Forecast extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      city: "",
      country: "",
      week: [],
      error: ""
    }
  }
  componentDidMount(){
    const loc = queryString.parse(this.props.location.search);

    getForecast(loc.city, 6).then(data => {
      if (data === null) {
        return this.setState(function(){
          return {
            error: "Looks like was an error"}
        })
      }
      // console.log(data);
      this.setState(function() {
        return {
          city: data.city.name,
          country: data.city.country,
          week: data.list
        }
      })
    })
  }
  render() {
    const info = {
      city: this.state.city,
      week: this.state.week,
      country: this.state.country
    }
    console.log(this.state.country);
    return (
      <div>
        <Week
          city={info.city}
          code={info.country}
          week={info.week}
           />
      </div>
    )
  }
}
export default Forecast;


// forecast.propTypes = {
//   props: PropTypes.string.isRequired,
// }
//

//
// getCurrent(loc.city).then(data => {
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


// getForecast(loc.city).then(data => {
//   const datos = {
//     city: data.city.name,
//     country: data.city.country,
//     description: data.list[0].weather[0].description,
//     icon: data.list[0].weather[0].icon
//   };
//   console.log(datos)
// })
