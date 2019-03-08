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
          <meta
            name="description"
            content="Jubiler Michał Fornalski, ul. Aleje 3-go Maja 31, Zakopane. Zapraszamy do obejrzenia galerii zdjęć własnoręcznych wyrobów jubilerskich. Biżuteria, obrączki, naszyjniki na każdą okazję!"
          />
          <meta name="robots" content="index, nofollow" />
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
