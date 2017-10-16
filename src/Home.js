import React, { Component } from 'react';

import Section from './Section.js';

import './Home.css';

class Home extends Component {
  render() {
    return (
      <div id="home" className="view view--home">
        <h1>Tatiana Veratti</h1>
        <h2>Web Developer, Gamer, Footballer</h2>
        <Section header="Test">
          More Stuff
        </Section>
      </div>
    );
  }
}

export default Home;