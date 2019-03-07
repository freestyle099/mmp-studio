import React from 'react';
import Navigation from './Navigation';
import Lightbox from './Lightbox';
import { Helmet } from 'react-helmet';

export default class Gallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: null,
    };
  }

  render() {
    return (
      <div>
        <Helmet>
          <title>Profesjonalny fotograf w Zakopanem - Portfolio</title>
          <meta name="description" content="Przedstawiam Państwu własne portfolio ze zdjęć zrobionych na różnych plenerach, weselach, komuniach, chrzcinach i różnego typu imprezach. Szukasz fotografa z pasją i zaangażowaniem? Wejdź na naszą stronę i mmpstudio.pl/galeria i zobacz naszą ofertę!" />
          <meta name="keywords" content="fotograf, zakopane," />
        </Helmet>
        <Navigation />
        {this.state.images && <Lightbox images={this.state.images} />}
      </div>
    );
  }

  componentDidMount() {
    fetch('/api/images')
      .then(resp => resp.json())
      .then(data => {
        this.setState({
          images: data,
        });
      })
      .catch(err => {
        console.log(err);
      });
  }
}
