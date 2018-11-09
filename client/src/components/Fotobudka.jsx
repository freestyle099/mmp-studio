// Fotobudka
import React from "react";
import FBNavigation from "./FotobudkaNavigation";
import SmallCarousel from "./SmallCarousel";
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
        <div className='container'>
        <SmallCarousel images={this.state.images} />
        </div>
        <NavigationImages />
        <FotobudkaInfo />
        <FotobudkaPrices />
        <ContactForm
          from="fotobudka"
          active="input-bottom-fb"
          btn="btn-fb"
          class="fotobudka"
        />
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
