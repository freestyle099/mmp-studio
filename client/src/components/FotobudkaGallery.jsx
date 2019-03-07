import React from 'react';
import FBNavigation from './FotobudkaNavigation';
import Lightbox from './Lightbox';

import { Helmet } from 'react-helmet';

export default class FotobudkaGallery extends React.Component {
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
          <title>Fotobudka - Zobacz naszą galerię zdjęć</title>
          <meta
            name="description"
            content="Zapraszamy do obejrzenia galerii zdjęć z magicznego urządzenia jakim jest Fotobudka. Wejdź na stronę i zobacz zdjęcia z fotobudki, może na następnej imprezie będzie właśnie u Ciebie?"
          />
          <meta name="keywords" content="fotograf, zakopane," />
        </Helmet>
        <FBNavigation />
        {this.state.images && <Lightbox images={this.state.images} />}
      </div>
    );
  }

  componentDidMount() {
    fetch('/api/fotobudkas')
      .then(resp => resp.json())
      .then(data => {
        this.setState({
          images: data,
        });
      });
  }
}
