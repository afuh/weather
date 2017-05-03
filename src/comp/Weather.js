import React from 'react';
import PropTypes from "prop-types";

import { getDate } from "../util/api";

//Name of the city, country and actual temperature
const Todaytemp = (props) => {
  const info = {
    city: props.data.forecast.city.name,
    country: props.data.forecast.city.country,
    temp: props.data.current.main.temp
  }
  return (
    <div className="today-cont">
      <h1>{info.city}, {info.country}</h1>
      <h2>{Math.round(info.temp)} °C</h2>
    </div>
  )
}
Todaytemp.propTypes = {
  data: PropTypes.object.isRequired
}

//Render the week
export class Weather extends React.Component {
  handleClick(day) {
    this.props.loc.history.push({
      pathname: '/detail/' + day.dt,
      state: day,
    })
  }
  render() {
    const week = this.props.info.forecast;
    return (
      <div className="weather">
        <Todaytemp data={this.props.info}/>
        <div className="week-cont row">
          {
            week.list.map((day, i) => (
              <Week
                key={i}
                day={day}
                onClick={() => this.handleClick(day)}
              />
            ))
          }
        </div>
      </div>
    )
  }
}
Weather.propTypes = {
  info: PropTypes.object.isRequired
}

//Render the each day of the week
const Week = (props) => {
    return (
      <div className="day-cont col" onClick={props.onClick}>
        <h2>{getDate(props.day.dt)}</h2>
        <img
          alt="weather"
          src={require(`../images/weather-icons/${props.day.weather[0].icon}.svg`)} />
        <h3>{props.day.weather[0].description}</h3>
      </div>
    )
};
Week.propTypes = {
  onClick: PropTypes.func.isRequired,
  day: PropTypes.object.isRequired
}

//Render the selected day
export const Day = (props) => {
  const day = props.location.state;
  return(
    <div className="detail-cont col">
      <h1>{getDate(props.match.params.id)}</h1>
      <img
        alt="weather"
        src={require(`../images/weather-icons/${day.weather[0].icon}.svg`)} />
      <h2>{day.weather[0].description}</h2>
      <p>Min: {Math.round(day.temp.min)} °C</p>
      <p>Max: {Math.round(day.temp.max)} °C</p>
      <p>Humidty: {day.humidity} %</p>
      <p>Clouds: {day.clouds} %</p>
      <button onClick={props.history.goBack}>⇦</button>
    </div>
  )
}
