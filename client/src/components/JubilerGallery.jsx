import React from 'react';
import JubilerNavigation from './JubilerNavigation';
import Lightbox from './Lightbox';
import { Helmet } from 'react-helmet';

export default class JubilerGallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: null,
    };
  }

  render() {
    return (
      <div className="jub-gallery">
      <Helmet>
          <title>Profesjonalne wyroby jubilerskie w Zakopanem - Michał Fornalski</title>
          <meta name="description" content="Szukasz biżuterii swoich marzeń? Zajmujemy się wyrobem biżuterii złotej, srebrnej, różnego typu obrączki, wisiorki, naszyjniki itp. Potrzebujesz biżuterii m.in. na wesela, na zaręczyny czy na własną wymarzoną okazję? Na naszej stronie znajdziesz biżuterię skomponowaną właśnie dla Ciebie!" />
          <meta name="keywords" content="" />
        </Helmet>
        <JubilerNavigation />
        {this.state.images && <Lightbox images={this.state.images} />}
      </div>
    );
  }

  componentDidMount() {
    fetch('/api/jubilers')
      .then(resp => resp.json())
      .then(data => {
        this.setState({
          images: data,
        });
      });
  }
}
