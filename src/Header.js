import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Menu from './Menu.js';

class Header extends Component {
  render() {
    return (
      <header className="header">
        {/* Skip Links */}
        <ul id="skiplinks">
          <li><a href="#content">To Content</a></li>
          <li><a href="#navigation">To Navigation</a></li>
          <li><a href="#footer">To Footer</a></li>
        </ul>

        {/* Navigation */}
        <ul id="navigation">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/programming">Programming</Link></li>
          <li><Link to="/gaming">Gaming</Link></li>
          <li><Link to="/soccer">Soccer</Link></li>
        </ul>

        <Menu />
      </header>
    );
  }
}

export default Header;