import React, { Component } from 'react';
import './Logo.css';

class Logo extends Component {
  state = { widths: [], expanded: false }

  render(){
    const { expanded } = this.state;
    let className = 'logo';
    if (expanded) className += ' logo--expanded';

    return (
      <div className={className}
        onMouseEnter={this.expand}
        onMouseLeave={this.collapse}>

        <div className="t" ref="t">t</div>

        <div className="logo__hides" ref="a"
          style={this.computeOffset(0)}>atiana</div>

        <div className="v" ref="v"
          style={this.computeOffset(1)}>v</div>

        <div className="logo__hides"
          style={this.computeOffset(2)}>eratti</div>

      </div>
    );
  }

  componentDidMount(){
    const { t, a, v } = this.refs;
    const widths = [t, a, v].map(r => r.offsetWidth);
    this.setState({ widths });
  }

  computeOffset = index => {
    const { widths, expanded } = this.state;
    let offset = 0;
    for (let i = 0; i <= index; i++){ offset += widths[i]; }
    
    const translate = expanded 
      ? 0
      : (index === 1 ? widths[1] : offset) * -1;

    return {
      left: `${offset}px`,
      transform: `translateX(${translate}px)`
    };
  }

  expand = () => {
    this.setState({ expanded: true });
  }

  collapse = () => {
    this.setState({ expanded: false });
  }
}

export default Logo;