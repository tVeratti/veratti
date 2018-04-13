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
          <li>SQL/T-SQL</li>
        </ul>

        <h3>JavaScript</h3>
        <p>
          JavaScript is my sandbox of choice. Sometimes I feel like a master, 
          and other times I am humbled (and excited) by the vast amount of knowledge 
          I still stand to gain.
        </p>
        <p>
          My personal GitHub is mostly pet projects that I have used to learn smaller
          pieces of frameworks and patterns. Even this site itself was an experiment with
          technologies that I hope to incorporate into my work and other projects in the 
          future!
        </p>
      </div>
    );
  }
}

export default Engineer;
