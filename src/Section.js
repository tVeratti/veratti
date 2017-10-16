import React from 'react';
import './Section.css';

const Section = props => {
  return (
    <div className="section">
      <h3 className="section__header">
        <span className="section__label">{props.header}</span>
      </h3>
      <div className="section__content">
        <svg className="section__flourish">
          <line x1="0" y1="0" x2="100%" y2="0"/>
        </svg>
        <div aria-hidden="true" className="section__border" />
        {props.children}
      </div>
    </div>
  )
}

export default Section;