import React from 'react';
import PropTypes from "prop-types";
import { Link } from 'react-router-dom';

import { getDate } from "../util/api";


const Week = (props) => {
  return (
    <div className="forecast">
      <h1>{props.city}, {props.code}</h1>
      <div className="week-cont row">
        {
          props.week.map((day, i) => (
            <Link
              key={i}
              to={`/detail/${props.city}/${i}`}
              className="day-cont col"
              >

              <h2>{getDate(i)}</h2>
              <img
                alt="weather"
                src={require(`../images/weather-icons/${day.weather[0].icon}.svg`)} />
              <h3>{day.weather[0].description}</h3>
            </Link>
          ))
        }
    </div>
  </div>
  )
}

Week.propTypes = {
  week: PropTypes.array.isRequired,
  city: PropTypes.string.isRequired
}

export default Week;
