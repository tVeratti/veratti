import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import { CSSTransitionGroup } from 'react-transition-group';

import './Menu.css';

class Menu extends Component {
  render() {
    const cards = [
      {to: '/', label: 'Home'},
      {to: '/engineer', label: 'Engineer'},
      {to: '/artist', label: 'Artist'},
      {to: '/gamer', label: 'Gamer'}
    ];

    return (
      <Route render={({ location }) => (
        <div className="menu">
          <div  className="menu__cards">
            <CSSTransitionGroup
              transitionName="card"
              transitionEnterTimeout={500}
              transitionLeaveTimeout={500}>
              {
                cards.filter(c => c.to !== location.pathname)
                .map(c => <Card key={c.to} {...c} />)
              }
            </CSSTransitionGroup>
          </div>

          <div id="navigation" className="menu__cover">
            {
              cards.map(c => {
                const className = location.pathname === c.to ? 'active' : '';
                return <Link key={c.to} className={className} to={c.to}>{c.label}</Link>
              })
            }
          </div>

        </div>
      )} />
    );
  }
}

const Card = props => (
  <div className="card">
    <Link to={props.to} className="card__face">
      <div className="card__label">{props.label}</div>
    </Link>
  </div>
);

export default Menu;