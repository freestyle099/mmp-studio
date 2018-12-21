import React from 'react';
import JubilerNavigation from './JubilerNavigation';
import Lightbox from './Lightbox';

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
