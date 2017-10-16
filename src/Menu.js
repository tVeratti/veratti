import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Menu.css';

class Menu extends Component {
  render() {
    return (
      <ul id="navigation" className="menu">
        <Card to="/">Home</Card>
        <Card to="/programming">Programming</Card>
        <Card to="/gaming">Gaming</Card>
        <Card to="/soccer">Soccer</Card>
      </ul>
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