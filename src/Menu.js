import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Menu.css';

class Menu extends Component {
  render() {
    return (
      <div id="menu" className="menu">
        <Card to="/home">Home</Card>
        <Card to="/programming">Programming</Card>
        <Card to="/gaming">Gaming</Card>
        <Card to="/soccer">Soccer</Card>
      </div>
    );
  }
}

const Card = (props) => (
  <Link to={props.to} className="card">
    <div className="card__face">
      <div className="card__label">{props.children}</div>
    </div>
  </Link>
);

export default Menu;