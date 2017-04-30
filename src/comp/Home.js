import React from 'react';
import Search from './Search'

class Home extends React.Component {
  render () {
    return (
      <main className="col">
        <h1>Enter a City</h1>
        <Search direction="col"/>
      </main>
    )
  }
}

export default Home;
