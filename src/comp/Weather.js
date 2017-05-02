import React from 'react';
import PropTypes from "prop-types";
import { Link } from 'react-router-dom';

import { getDate, getCurrent } from "../util/api";


const Todaytemp = (props) => {
  return (
    <div className="today-cont">
      <h1>{props.data.city}, {props.data.country}</h1>
      <h2>{Math.round(props.data.temp)} °C</h2>
    </div>
  )
}
Todaytemp.propTypes = {
  data: PropTypes.object.isRequired
}

const Week = (props) => {
  return (
    <div className="week-cont row">
      {
        props.data.week.map((day, i) => (
          <div className="day-cont col" key={i} onClick={props.onClick}>
            <h2>{getDate(day.dt)} </h2>
            <img
              alt="weather"
              src={require(`../images/weather-icons/${day.weather[0].icon}.svg`)} />
            <h3>{day.weather[0].description}</h3>
          </div>
        ))
      }
  </div>
  )
};
Week.propTypes = {
  data: PropTypes.object.isRequired,
}

export const Day = (props) => {
  console.log(props)
  return(
    <div className="day-cont" onClick={props.onClick}>

    </div>
  )
}

class Weather extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      week: true
    }
  }
  handleClick(e) {
    e.preventDefault()
    this.setState({week: !this.state.week})
  }
  render() {
    return (
      <div className="weather">
        <Todaytemp data={this.props.info}/>
        {
          this.state.week
          ? <Week data={this.props.info} onClick={this.handleClick.bind(this)}/>
          : <Day data={this.props.info} onClick={this.handleClick.bind(this)}/>
        }
      </div>
    )
  }
}

Weather.propTypes = {
  info: PropTypes.object.isRequired
}

export default Weather;
