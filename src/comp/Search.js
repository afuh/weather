import React from 'react';
import PropTypes from "prop-types";
import { Link } from 'react-router-dom';

import forecast from "./Forecast";
import { getCityByIp as ip} from "../util/api";

class Search extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      input: ""
    }
    this.handleChange = this.handleChange.bind(this)
  }
  componentDidMount(){
    ip().then(data => this.setState({input: data.city}))
  }
  handleChange(e) {
    const value = e.target.value;
    this.setState({input: value});
  }
  render () {
    const input = this.state.input;
    return (
        <div className={`${this.props.direction} form`}>
          <input
            placeholder="Berlin"
            autoComplete='off'
            type="text"
            onChange={this.handleChange}>
          </input>
          <Link
            className='btn'
            to={{
              pathname: `/forecast`,
              search: `?city=${input}`,
            }}
            >
              Get Weather
          </Link>
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

/*
<button
  className="btn"
  onClick={this.handleSubmit}
  type="submit"
  >
    Get Weather
  </button>
  */
