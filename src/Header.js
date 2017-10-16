import React, { Component } from 'react';

import Menu from './Menu.js';

class Header extends Component {
  render() {
    return (
      <header className="header">
        {/* Skip Links */}
        <ul id="skiplinks">
          <li><a href="#content">To Content</a></li>
          <li><a href="#navigation">To Navigation</a></li>
        </ul>

        <Menu />
      </header>
    );
  }
}

export default Header;