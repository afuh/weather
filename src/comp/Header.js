import React from 'react';
import { Link } from 'react-router-dom';

import Search from "./Search";

const Header = (props) => {
  return (
    <header className="row">
      <Link to="/">
        <span className="home-btn">Home</span>
      </Link>
      <Search
        direction="row"
        onSubmit={input => {
          props.history.push({
            pathname: '/forecast',
            search: `?city=${input}`
          });
        }}
      />
    </header>
  )
}

export default Header;
