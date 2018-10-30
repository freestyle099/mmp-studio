// Fotobudka
import React from "react";
import FBNavigation from "./FotobudkaNavigation";
import Carousel from "./Carousel";
import NavigationImages from "./NavigationImages";
import FotobudkaInfo from "./FotobudkaInfo";
import FotobudkaPrices from "./FotobudkaPrices";

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
        <Carousel images={this.state.images} />
        <NavigationImages />
        <FotobudkaInfo/>
        <FotobudkaPrices/>
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