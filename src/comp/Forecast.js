import React from 'react';
import PropTypes from "prop-types";
import queryString from 'query-string';

import Week from "./Week"
import Loading from "./Loading";
import { getForecast, getCityByIp as ip } from "../util/api"

class Forecast extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      city: "",
      country: "",
      week: [],
      loading: true,
      error: ""
    }
  }
  componentDidMount(){
    const loc = queryString.parse(this.props.location.search);
    this.request(loc);
  }
  componentWillReceiveProps(nextProps) {
    const loc = queryString.parse(nextProps.location.search);
    this.request(loc);
  }
  request(loc) {
    getForecast(loc.city, 6).then(data => {
      if (data === null) {
        return this.setState(function(){
          return {
            error: "Looks like was an error",
            loading: false
          }
        })
      }
      this.setState(function() {
        return {
          city: data.city.name,
          country: data.city.country,
          week: data.list,
          loading: false
        }
      })
    })
  }
  render() {
    const error = this.state.error;
    const loading = this.state.loading;
    const info = {
      city: this.state.city,
      week: this.state.week,
      country: this.state.country
    }
    if (loading) {
      return <Loading />
    }
    else if (error) {
      return <p>{error}</p>
    }
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
