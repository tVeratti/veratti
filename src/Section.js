import React from 'react';
import './Section.css';

const Section = props => {
  return (
    <div className="section">
      <h3 className="section__header">
        <span className="section__label">{props.header}</span>
      </h3>
      <div className="section__content">
        <svg className="section__corner">
          <path d="M 1 1 l 20 20 l 0 5"/>
        </svg>
        <div aria-hidden="true" className="section__border" />
        {props.children}
      </div>
    </div>
  )
}

export default Section;