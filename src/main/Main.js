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
      <main id="content" className="main">
        <div className="main__links">
          <a rel="noopener noreferrer" href="https://twitter.com/TatianaVeratti" target="_blank">Twitter</a>
          <a rel="noopener noreferrer" href="https://github.com/tVeratti" target="_blank">GitHub</a>
          <a rel="noopener noreferrer" href="http://steamcommunity.com/id/veratti" target="_blank">Steam</a>
        </div>

        <div className="main__views">
          {/* Routing Main Views */}
          <Route render={({ location }) => (
            <CSSTransitionGroup
              transitionName="view"
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
        </div>
    </main>
    );
  }

  changeLanguage = e => {
    const { value } = e.target;
    const { onLanguageChange } = this.props;
    onLanguageChange(value);
  }
}

export default Main;