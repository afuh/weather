import React from 'react';
import queryString from 'query-string';

import { Weather } from "./Weather"
import Loading from "./Loading";
import { getWeather } from "../util/api"

class Forecast extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      data: {},
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
    getWeather(loc.city).then(data => {
      if (data === null) {
        return this.setState(function(){
          return {
            error: "Looks like was an error",
            loading: false
          }
        })
      }
      this.setState(function(){
        return {
          data: data,
          loading: false
        }
      })
    })
  }
  render() {
    const error = this.state.error;
    const loading = this.state.loading;
    const info = {}

    if (loading) {
      return <Loading />
    }
    else if (error) {
      return <p>{error}</p>
    }
    return (
      <div>
        <Weather
          info={this.state.data}
          loc={this.props}
        />
      </div>
    )
  }
}
export default Forecast;
