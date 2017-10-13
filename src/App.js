import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';

import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div id="app">
          <Header />
          <Main />
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
