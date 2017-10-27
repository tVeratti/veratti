import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { throttle } from './Utils.js';
import './Menu.css';

// import home from './svg/home.svg';
// import engineer from './svg/engineer.svg';
// import gamer from './svg/gamer.svg';
// import artist from './svg/artist.svg';

class Menu extends Component {
  render() {
    const cards = [
      {to: '/', label: 'Home'},
      {to: '/engineer', label: 'Engineer'},
      {to: '/artist', label: 'Artist'},
      {to: '/gamer', label: 'Gamer'}
    ];

    const cardNodes = cards.map((c, i) => <Card key={c.to} {...c} index={i} total={cards.length} />);
    const linkNodes = cards.map(c => <Link key={c.to} to={c.to}>{c.label}</Link>);

    return (
      <div className="menu">
        {/* Decorative Cards */}
        <div  className="menu__cards">
            {cardNodes}
        </div>

        {/* Basic Links */}
        <div id="navigation" className="menu__cover">
          {linkNodes}
        </div>
      </div>
    );
  }
}

class Card extends React.Component {
  state = { transform: '' }
  render(){
    const { to, label, index } = this.props;
    const { active, transform } = this.state;
    let { translateY, rotate, rotateX, rotateY } = transform;

    // Active transforms...
    if (active) {
      translateY = -100;
      rotate = 0;
    }

    // switch(to){
    //   case '/': image = home; break;
    //   case '/engineer': image = engineer; break;
    //   case '/gamer': image = gamer; break;
    //   case '/artist': image = artist; break;
    // }

    const style = { transform: 
      `translateY(${translateY}px) rotate(${rotate}deg) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
    };

    const imageStyle = { transform: 
      `rotateX(${rotateX*0.5}deg) rotateY(${rotateY*0.5}deg) translateZ(5rem)`
    };

    return (
    <div className="card"
      onMouseMove={this.mouseMove}
      onMouseEnter={this.activate}
      onMouseLeave={this.deactivate}
      >
      <Link to={to} className="card__face" style={style}>
        <div className="card__body" ref="card">
          <div className="card__label">{label}</div>
          <div className="card__image" style={imageStyle} />
          <div className="card__number">{index + 1}</div>
        </div>
      </Link>
    </div>
    );
  }

  mouseMove = e => {
    const { card } = this.refs;
    const { left, right, top, bottom } = card.getBoundingClientRect();

    // Percentage distance through the card.
    const width = right - left;
    const height = bottom - top;
    const x = 3 * (((width - (right - e.pageX)) - 50) / 100);
    const y = 1 * (((height - (bottom - e.pageY)) - 50) / 100);
    this.rotate(x, y);
  }

  rotate = throttle((x, y) => {
    let { transform } = this.state;
    transform.rotateX = y;
    transform.rotateY = x;
    this.setState({ transform });
  }, 10)

  activate = e => this.setState({ active: true });
  deactivate = e => {
    const { transform } = this.state;
    transform.rotateX = 0;
    transform.rotateY = 0;
    this.setState({ active: false, transform });
  } 

  componentWillMount(){
    // Modified from original by Jack Rugile
    // ref: https://codepen.io/jackrugile/pres/WZGeGM
    const { index, total } = this.props;
    const rotationRange = 20;
    const rotation = (index - (total - 1) / 2) / (total - 2) * rotationRange;

    const offsetRange = 30;
    const offset = Math.abs((index - (total - 1) / 2) / (total - 2) * offsetRange);

    const transform = {
      translateY: offset,
      rotate: rotation,
      scale: 0.5,
      rotateY: 0,
      rotateX: 0
    };
    
    this.setState({ transform });
  }
};

export default Menu;