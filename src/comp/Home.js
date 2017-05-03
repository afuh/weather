import React from 'react';
import Search from './Search';

const Home = (props) => {
  return (
    <main className="col">
      <h1>Enter a City</h1>
      <Search
        direction="col"
        onSubmit={input => {
          props.history.push({
            pathname: '/forecast',
            search: `?city=${input}`
          });
        }}
      />
    </main>
  )
}

export default Home;
