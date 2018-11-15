import React from 'react';
import Navigation from './Navigation';

export default class Video extends React.Component {
  render() {
    return (
      <div className="video">
        <Navigation />
        <h2>Wideo</h2>
        <div className="container">
          <div className="frames">
            <iframe src="https://player.vimeo.com/video/215221999" frameBorder="0" allowFullScreen />
            <iframe src="https://player.vimeo.com/video/215221999" frameBorder="0" allowFullScreen />
            <iframe src="https://player.vimeo.com/video/215221999" frameBorder="0" allowFullScreen />
          </div>
        </div>
      </div>
    );
  }
}
