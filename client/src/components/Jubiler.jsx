// Jubiler

import React from "react";
import JubilerNavigation from "./JubilerNavigation";
import Carousel from "./Carousel";
import NavigationImages from "./NavigationImages";

export default class Jubiler extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: []
    };
  }

  render() {
    return (
      <div>
        <JubilerNavigation />
        <Carousel images={this.state.images} />
        <NavigationImages />
      </div>
    );
  }
  componentDidMount() {
    fetch("/api/jubilers")
      .then(resp => resp.json())
      .then(data =>
        this.setState({
          images: data
        })
      );
  }
}
