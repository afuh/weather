import React from 'react';
import PropTypes from 'prop-types';

const style = {
  content: {
    textAlign: 'center',
    fontSize: '35px'
  }
};

class Loading extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: props.text
    };
  }
  componentDidMount() {
    const stopper = this.props.text + '...'
    this.interval = window.setInterval(() => {
      if(this.state.text === stopper) {
        this.setState(function(){
          return {
            text: this.props.text
          }
        })
      } else {
        this.setState(function(prevState){
          return {
            text: prevState.text + '.'
          }
        })
      }
    }, this.props.speed)
  }
  componentWillUnmount() {
    window.clearInterval(this.interval);
  }
  render () {
    return (
      <p style={style.content}>
        {this.state.text}
      </p>
    )
  }
}

Loading.propTypes = {
  text: PropTypes.string.isRequired,
  speed: PropTypes.number.isRequired
};

Loading.defaultProps = {
  text: 'Loading',
  speed: 300
};

export default Loading;
