import React from 'react';
import PropTypes from "prop-types";
import { Link } from 'react-router-dom';

import forecast from "./Forecast";

class Search extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      input: ""
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleChange(e) {
    const input = e.target.value;
    this.setState(function() {
      return {
        input: input
      }
    });
    forecast(this.state.input)
  }
  handleSubmit(e) {
    e.preventDefault()
    forecast(this.state.input)
  }
  render () {
    return (
        <div className={`${this.props.direction} form`}>
          <input
            placeholder="Berlin"
            autoComplete='off'
            type="text"
            onChange={this.handleChange}>
          </input>
          <button
            className="btn"
            onClick={this.handleSubmit}
            type="submit"
            >
              Get Weather
            </button>
        </div>
    )
  }
}

export default Search;

Search.defaultProps = {
  direction: 'col'
}




/*
<Link
  className='btn'
  to={{
    pathname: `forecast/`,
    search: `?city=${this.state.input}`,
  }}
  >
    Get Weather
</Link>
*/
