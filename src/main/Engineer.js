import React, { Component } from 'react';

class Engineer extends Component {
  render() {
    return (
      <div id="engineer" className="view view--engineer">
        <h2>{global.translations.Engineer}</h2>
        <p>
          <q>
            The secret of joy in work is contained in one word – excellence. To
            know how to do something well is to enjoy it.
          </q>
          - Pearl S. Buck
        </p>
        <p>{global.translations.Engineer_Intro}</p>
        <ul>
          <li>JavaScript</li>
          <li>C#</li>
        </ul>

        <h3>JavaScript</h3>
      </div>
    );
  }
}

export default Engineer;
