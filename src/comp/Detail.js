import React from 'react';
import PropTypes from "prop-types";
import queryString from 'query-string';

import { getForecast } from "../util/api"
import { getDate } from "../util/api";

class Detail extends React.Component  {
  constructor(props) {
    super(props)

    this.state = {
      city: this.props.match.params.city,
      id: this.props.match.params.id,
      humidity: "",
      max: "",
      min: "",
      description: "",
      icon: ""
    }
  }
  componentWillMount() {
    getForecast(this.state.city).then(data => {
      const id = this.state.id;
      const today = data.list[id];
      this.setState(function(){
        return {
          humidity: `${today.humidity} %`,
          max: `${Math.round(today.temp.max)} ºC`,
          min: `${Math.round(today.temp.min)} ºC`,
          description: `${today.weather[0].description}`,
          icon: `${today.weather[0].icon}`
        }
      })
    })
  }
  render() {
    console.log(this.state.id);
    return (
      <div className="detail-cont col">
        <h2>{this.state.city}</h2>
        <p>{this.state.description}</p>
        <img
          alt="weather"
          src={this.state.icon && require(`../images/weather-icons/${this.state.icon}.svg`)} />
        <p>max temp: {this.state.max}</p>
        <p>min temp: {this.state.min}</p>
        <p>humidity: {this.state.humidity}</p>
      </div>
    )
  }
}

export default Detail;
