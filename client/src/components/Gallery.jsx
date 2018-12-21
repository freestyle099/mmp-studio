import React from 'react';
import Navigation from './Navigation';
import Lightbox from './Lightbox';

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
      });
  }
}
