// Fotobudka
import React from "react";
import FBNavigation from "./FotobudkaNavigation";
import Carousel from "./Carousel";
import NavigationImages from "./NavigationImages";
import FotobudkaInfo from "./FotobudkaInfo";
import FotobudkaPrices from "./FotobudkaPrices";
import ContactForm from "./ContactForm";

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
        <ContactForm btn='btn-fb' class='fotobudka'/>
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