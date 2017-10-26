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

    const languageOptions = [
      {Id: 'en', Display: 'English'},
      {Id: 'fr', Display: 'Français'},
      {Id: 'pir', Display: 'Pirate'},
    ].map(o => <option value={o.Id}>{o.Display}</option>);

    return (
      <main id="content" className="main">

        {/* Site Options (Language...) */}
        <div className="main__options">
          <div className="field">
            <label htmlFor="language">Language</label>
            <select id="language" onChange={this.changeLanguage}>{languageOptions}</select>
          </div>
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