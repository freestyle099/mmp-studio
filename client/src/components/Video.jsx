import React from 'react';
import Navigation from './Navigation';
import { Helmet } from 'react-helmet';

export default class Video extends React.Component {
  vimeo = 'https://player.vimeo.com/video/';
  video = [
    {
      id: 0,
      url: this.vimeo + '215221999',
    },
    {
      id: 1,
      url: this.vimeo + '86337363',
    },
    {
      id: 2,
      url: this.vimeo + '76446940',
    },
    {
      id: 3,
      url: this.vimeo + '87219132',
    },
    {
      id: 4,
      url: this.vimeo + '88088095',
    },
    {
      id: 5,
      url: this.vimeo + '75485907',
    },
    {
      id: 6,
      url: this.vimeo + '74648248',
    },
    {
      id: 7,
      url: this.vimeo + '101975728',
    },
    {
      id: 8,
      url: this.vimeo + '105167451',
    },
    {
      id: 9,
      url: this.vimeo + '150602345',
    },
    {
      id: 10,
      url: this.vimeo + '141919753',
    },
    {
      id: 11,
      url: this.vimeo + '158305442',
    },
    {
      id: 12,
      url: this.vimeo + '160102970',
    },
    {
      id: 13,
      url: this.vimeo + '160787576',
    },
    {
      id: 14,
      url: this.vimeo + '164402026',
    },
    {
      id: 15,
      url: this.vimeo + '164402025',
    },
    {
      id: 16,
      url: this.vimeo + '161595449',
    },
  ];
  render() {
    return (
      <div className="video">
        <Helmet>
          <title>MMPStudio - Galeria Wideo</title>
          <meta
            name="description"
            content="Zobacz filmy zrealizowane na weselach, studniówkach itp. Nasze filmy są profesjonalnie zmontowane i perfekcyjnie uchwyciły każdą chwilę, aby każdy mógł przeżyć je na nowo. "
          />
        </Helmet>
        <Navigation />
        <h2>Wideo</h2>
        <div className="container">
          <div className="frames">
            {this.video.map(el => {
              return <iframe src={el.url} key={el.id} frameBorder="0" allowFullScreen />;
            })}
          </div>
        </div>
      </div>
    );
  }
}
