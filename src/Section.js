import React from 'react';
import './Section.css';

const Section = props => {
  return (
    <div className="section">
      {/* Header */}
      <h3 className="section__header">
        <span className="section__bevel" aria-hidden="true" />
        <span className="section__label">{props.header}</span>
      </h3>

      {/* Content */}
      <div className="section__content">
        <span className="section__bevel section__bevel--filled" />
        <div className="section__text">{props.children}</div>
      </div>
    </div>
  )
}

export default Section;