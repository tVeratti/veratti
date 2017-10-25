import React, { Component } from 'react';

class Home extends Component {
  render() {
    return (
      <div className="view view--home">
        <h2>{global.translations.Home}</h2>
        <h3>{global.translations.AboutMe}</h3>
        <div className="view__section">
          <p>{global.translations.Intro}</p>
        </div>

        <h3>{global.translations.Contact}</h3>
        <div className="view__section">
          <p>Me@TatianaVeratti.com</p>
          <p>@TatianaVeratti.com</p>
        </div>
      </div>
    );
  }
}

export default Home;