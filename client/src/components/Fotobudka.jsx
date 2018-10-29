// Fotobudka
import React from "react";
import FBNavigation from "./FotobudkaNavigation";
import Carousel from "./Carousel";
import NavigationImages from "./NavigationImages";

export default class Fotobudka extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: []
    };
  }

  render() {
    return (
      <div>
        <FBNavigation />
        Hello Fotobudka
        <Carousel images={this.state.images} />
        <NavigationImages />
      </div>
    );
  }
  componentDidMount() {
    fetch("/api/fotobudkas")
      .then(resp => resp.json())
      .then(data => {
        this.setState({
          images: data
        });
      });
  }
}