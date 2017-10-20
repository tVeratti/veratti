import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';

import Header from './Header.js';
import Main from './main/Main.js';
import Menu from './Menu.js';

import defaultTranslations from './translations/strings.en.js';

import './App.css';

class App extends Component {
  state = { translations: defaultTranslations }

  render() {
    global.translations = this.state.translations;

    return (
      <BrowserRouter>
        <div id="app">
          <Header onLanguageChange={this.changeLanguage} />
          <Main />
          <Menu />
        </div>
      </BrowserRouter>
    );
  }

  changeLanguage = lang => {
    import(`./translations/strings.${lang}.js`)
      .then(set => this.setState({ translations: set.default }));
  }

}

export default App;
