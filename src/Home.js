import React, { Component } from 'react';

import Section from './Section.js';

import './Home.css';

class Home extends Component {
  render() {
    return (
      <div id="home" className="view view--home">
        <h1>CERNER FLASHES</h1>
        <h2>XYZ</h2>
        <Section header="Test">
          More Stuff
        </Section>
      </div>
    );
  }
}

export default Home;