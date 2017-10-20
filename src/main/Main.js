import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { CSSTransitionGroup } from 'react-transition-group'

import Home from './Home.js';
import Engineer from './Engineer.js';
import Artist from './Artist.js';
import Gamer from './Gamer.js';

import './Main.css';

class Main extends Component {
  render() {
    return (
      <main id="content">
      <Route render={({ location }) => (
        <CSSTransitionGroup
          transitionName="example"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}>
        
          <Switch key={location.key} location={location}>
            <Route path="/" exact component={Home} />
            <Route path="/engineer" component={Engineer} />
            <Route path="/artist" component={Artist} />
            <Route path="/gamer" component={Gamer} />
          </Switch>
        </CSSTransitionGroup>
      )}/>
      
    </main>
    );
  }
}

export default Main;