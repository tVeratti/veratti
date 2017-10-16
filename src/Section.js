import React from 'react';
import './Section.css'

const Section = props => {
  return (
    <div className="section">
      <h3 className="section__header">{props.header}</h3>
      <div className="section__content">
        {props.children}
      </div>
    </div>
  )
}

export default Section;