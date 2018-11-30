// Fotobudka
import React from 'react';
import FBNavigation from './FotobudkaNavigation';
import SmallCarousel from './SmallCarousel';
import NavigationImages from './NavigationImages';
import FotobudkaInfo from './FotobudkaInfo';
import FotobudkaPrices from './FotobudkaPrices';
import ContactForm from './ContactForm';

export default class Fotobudka extends React.Component {
  images = [
    {
      id: 1,
      url: '1.jpg'
    }
  ]

  render() {
    return (
      <div>

        <div className="con-fb">
          <SmallCarousel images={this.images} />
          <FBNavigation />
        </div>
        <NavigationImages />
        <FotobudkaInfo />
        <FotobudkaPrices />
        <ContactForm from="fotobudka" active="input-bottom-fb" btn="btn-fb" class="fotobudka" />
      </div>
    );
  }

}
