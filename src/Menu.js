import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Menu.css';

class Menu extends Component {
  render() {
    return (
      <div className="menu">
        <ul id="navigation" className="menu__cards">
          <Card to="/">Home</Card>
          <Card to="/engineer">Programming</Card>
          <Card to="/artist">Artist</Card>
          <Card to="/gamer">Gamer</Card>
        </ul>
        <div className="menu__cover"/>
      </div>
    );
  }
}

const Card = props => (
  <li className="card">
    <Link to={props.to} className="card__face">
      <div className="card__label">{props.children}</div>
    </Link>
  </li>
);

export default Menu;