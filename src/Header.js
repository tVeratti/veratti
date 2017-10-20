import React, { Component } from 'react';

import './Header.css';

class Header extends Component {
  render() {

    return (
      <header className="header">
        {/* Skip Links */}
        <ul id="skiplinks">
          <li><a href="#content">To Content</a></li>
          <li><a href="#navigation">To Navigation</a></li>
        </ul>
      
        <div className="header__image" aria-hidden="true" />
        <h1 className="header__name">Tatiana Veratti</h1>

      </header>
    );
  }

  changeLanguage = lang => {
    const { onLanguageChange } = this.props;
    onLanguageChange('fr');
  }
}

export default Header;