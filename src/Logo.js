import React, { Component } from 'react';
import './Logo.css';

class Logo extends Component {
  state = { widths: [], expanded: false }
 

  render(){
    const { expanded, full } = this.state;

    let className = 'logo';
    if (expanded || full) className += ' logo--expanded';

    return (
      <div className={className}
        onMouseEnter={this.expand}
        onMouseLeave={this.collapse}>

        <div className="logo__anchor">
          {/* T */}
          <div className="logo__letter" ref="t">T</div>
          {/* atiana */}
          <div className="logo__word" ref="a"
            style={this.computeOffset(0)}>atiana</div>

          {/* V */}
          <div className="logo__letter" ref="v"
            style={this.computeOffset(1)}>V</div>
          {/* eratti */}
          <div className="logo__word"
            style={this.computeOffset(2)}>eratti</div>
        </div>

      </div>
    );
  }

  componentDidMount(){
    this.measure(this.props);
  }

  componentWillReceiveProps(nextProps){
    this.measure(nextProps);
  }

  measure(props){
    const { t, a, v } = this.refs;
    const widths = [t, a, v].map(r => r.offsetWidth);

    const { pathname } = props;
    const full = !pathname.split('/')[1];

    this.setState({ widths, full });
  }

  computeOffset = index => {
    const { widths, expanded, full } = this.state;
    let offset = 0;
    for (let i = 0; i <= index; i++){ offset += widths[i]; }
    
    const translate = expanded || full
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