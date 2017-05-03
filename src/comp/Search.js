import React from 'react';
import PropTypes from "prop-types";

import { getCityByIp as ip} from "../util/api";

class Search extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      input: ""
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }
  componentDidMount(){
    ip().then(data => this.setState({input: data.city}))
  }
  handleSubmit() {
    this.props.onSubmit(this.state.input)
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
          <button
            type='button'
            className='btn'
            onClick={this.handleSubmit}
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

Search.propTypes = {
  direction: PropTypes.string
}
