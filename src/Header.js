import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Menu from './Menu.js';
import Logo from './Logo.js';

class Header extends Component {
  render() {
    return (
      <header className="header">
        {/* Skip Links */}
        <ul id="skiplinks">
          <li><a href="#content">To Content</a></li>
          <li><a href="#navigation">To Navigation</a></li>
        </ul>
      

        <Route render={({ location }) => <Logo pathname={location.pathname} /> }/>

        <Menu />
      </header>
    );
  }
}

export default Header;