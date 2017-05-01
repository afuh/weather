import React from 'react';
import PropTypes from "prop-types";
import {getDate} from "../util/api";

const Week = (props) => {
  return (
    <div className="forecast">
      <h1>{props.city}, {props.code}</h1>
      <div className="week-cont row">
        {props.week && props.week.map((day, i) => (
          <div key={i} className="day-cont col">
            <h2>{getDate(i)}</h2>
            <img
              className="weather" alt="weather" src={require(`../images/weather-icons/${day.weather[0].icon}.svg`)}
            />
            <h3>{day.weather[0].description}</h3>
          </div>
        ))}
      </div>
  </div>
  )
}

Week.propTypes = {
  week: PropTypes.array.isRequired,
  city: PropTypes.string.isRequired
}

export default Week;
