import React from 'react';
import Navigation from './Navigation';
import Lightbox from './Lightbox';

export default class Gallery extends React.Component {
  images = [
    {
      id: 0,
      url: 'https://imagizer.imageshack.com/v2/1000x667q90/924/NusQTA.jpg',
    },
    {
      id: 1,
      url: 'https://imagizer.imageshack.com/v2/1000x667q90/923/UIOVFY.jpg',
    },
    {
      id: 2,
      url: 'https://imagizer.imageshack.com/v2/1000x667q90/922/9gGXq6.jpg',
    },
    {
      id: 3,
      url: 'https://imagizer.imageshack.com/v2/1000x667q90/923/CQ95Vi.jpg',
    },
    {
      id: 4,
      url: 'https://imagizer.imageshack.com/v2/1000x667q90/923/PowW7D.jpg',
    },
    {
      id: 5,
      url: 'https://imagizer.imageshack.com/v2/1000x667q90/922/agjQTG.jpg',
    },
    {
      id: 6,
      url: 'https://imagizer.imageshack.com/v2/526x790q90/924/SX6cU0.jpg',
      class: 'vertical',
    },
    {
      id: 7,
      url: 'https://imagizer.imageshack.com/v2/1000x667q90/921/LlSUBM.jpg',
    },
    {
      id: 8,
      url: 'https://imagizer.imageshack.com/v2/1000x667q90/924/qTIDf0.jpg',
    },
    {
      id: 9,
      url: 'https://imagizer.imageshack.com/v2/1000x667q90/922/AIso8x.jpg',
    },
  ];

  render() {
    return (
      <div>
        <Navigation />
        <Lightbox images={this.images} />
      </div>
    );
  }
}
