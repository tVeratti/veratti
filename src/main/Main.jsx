import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { CSSTransitionGroup } from 'react-transition-group';

import Home from './Home.jsx';
import Engineer from './Engineer.jsx';
import Artist from './Artist.jsx';
import Gamer from './Gamer.jsx';

import YouTubeIcon from '../svg/youtube.js';
import TwitterIcon from '../svg/twitter.js';
import GitHubIcon from '../svg/github.js';
import SteamIcon from '../svg/steam.js';

import './Main.scss';

export default class extends Component {
  render() {
    return (
      <main id="content" className="main">
        <div className="main__links">
          {this.renderTwitterLink()}
          {this.renderGitHubLink()}
          {this.renderYouTubeLink()}
          {this.renderSteamLink()}
          {this.renderSourceLink()}
        </div>

        <div className="main__views">
          {/* Routing Main Views */}
          <Route
            render={({ location }) => (
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
            )}
          />
        </div>
      </main>
    );
  }

  changeLanguage = e => {
    const { value } = e.target;
    const { onLanguageChange } = this.props;
    onLanguageChange(value);
  };

  renderTwitterLink() {
    return this.renderLink(
      'https://twitter.com/TatianaVeratti',
      'Twitter',
      <TwitterIcon />
    );
  }

  renderGitHubLink() {
    return this.renderLink(
      'https://github.com/tVeratti',
      'GitHub',
      <GitHubIcon />
    );
  }

  renderSteamLink() {
    return this.renderLink(
      'http://steamcommunity.com/id/veratti',
      'Steam',
      <SteamIcon />
    );
  }

  renderYouTubeLink() {
    return this.renderLink(
      'https://www.youtube.com/channel/UC1dwxYAwHOAPCws0h9dmLDg',
      'YouTube',
      <YouTubeIcon />
    );
  }

  renderSourceLink() {
    return this.renderLink(
      'https://github.com/tVeratti/veratti',
      'Source code for this site'
    );
  }

  renderLink(href, text, svg) {
    return (
      <a
        className="ex-link"
        rel="noopener noreferrer"
        target="_blank"
        href={href}>
        <span className="ex-link__logo" aria-hidden="true">
          {svg}
        </span>
        <span className="ex-link__text">{text}</span>
      </a>
    );
  }
}
