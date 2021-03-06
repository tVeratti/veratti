import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';

import Header from './Header.jsx';
import Main from './main/Main.jsx';
import Menu from './Menu.jsx';

import defaultTranslations from './translations/strings.en.js';

import './App.scss';

class App extends Component {
  state = { translations: defaultTranslations };

  componentDidMount() {
    // Get language settings from localStorage
    // so that the user may retain their setting
    // across sessions.
    const lang = localStorage.getItem('language');
    if (lang) this.changeLanguage(lang);
    localStorage.setItem('language', lang || 'en');
  }

  render() {
    global.translations = this.state.translations;

    return (
      <BrowserRouter>
        <div id="app">
          <Header />
          <Main onLanguageChange={this.changeLanguage} />
          <Menu />
        </div>
      </BrowserRouter>
    );
  }

  changeLanguage = lang => {
    import(`./translations/strings.${lang}.js`).then(set =>
      this.setState({
        translations: {
          ...defaultTranslations, // fallback
          ...set.default
        }
      })
    );
  };
}

export default App;
