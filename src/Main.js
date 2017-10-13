import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { CSSTransitionGroup } from 'react-transition-group'

import Home from './Home.js';
import Gaming from './Gaming.js';
import Soccer from './Soccer.js';
import Programming from './Programming.js';

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
            <Route path="/gaming" component={Gaming} />
            <Route path="/soccer" component={Soccer} />
            <Route path="/programming" component={Programming} />
          </Switch>
        </CSSTransitionGroup>
      )}/>
      
    </main>
    );
  }
}

export default Main;