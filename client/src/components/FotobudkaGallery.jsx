import React from 'react';
import FBNavigation from './FotobudkaNavigation';
import Lightbox from './Lightbox';

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
