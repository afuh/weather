import React from 'react';
import { Link } from 'react-router-dom';

import Search from "./Search";

class Header extends React.Component {
  render () {
    return (
      <header className="row">
        <Link to="/">
          <span className="home-btn">Home</span>
        </Link>
        <Search direction="row" />
      </header>
    )
  }
}

export default Header;
