import React, { Component } from 'react';

class Artist extends Component {
  render() {
    return (
      <div id="artist" className="view view--artist">
        <h2>Artist</h2>
        <p>Art led me to becoming an engineer. Perhaps a contradiction to most, art and engineering have both been an outlet of creativity for me.</p>
        <p>In high school I believed that I wanted to become a concept artist for video games. This led me to pursue an Associate's Degree in Video Game Development. However, my first semester course schedule included Programming 101. This class changed my path completely and immediately. I had never been exposed to coding before, but I fell in love "at first for-loop". I changed my focus from art to programming and have never regretted the decision.</p>
        <p>Art is a bit of a rare hobby for me anymore, but it's still something I consider very core to who I am.</p>
      </div>
    );
  }
}

export default Artist;