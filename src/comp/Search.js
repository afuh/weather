import React from 'react';
import PropTypes from "prop-types";

import { getCityByIp as ip} from "../util/api";

class Search extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      input: "",
      ip: ""
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }
  componentDidMount(){
    ip().then(data => this.setState({
      input: data.city,
      ip: `${data.city}, ${data.country}`
    }))
  }
  handleSubmit(e) {
    this.props.onSubmit(this.state.input)
    e.preventDefault()
  }
  handleChange(e) {
    const value = e.target.value;
    this.setState({input: value});
  }
  render () {
    const input = this.state.input;
    return (
        <form onSubmit={this.handleSubmit} className={`${this.props.direction} form`}>
          <input
            placeholder={this.state.ip}
            autoComplete='off'
            type="text"
            onChange={this.handleChange}>
          </input>
          <input
            type='submit'
            className='btn'
            value="Get Weather"
            />
        </form>
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
