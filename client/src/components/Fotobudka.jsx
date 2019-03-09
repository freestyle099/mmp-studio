// Fotobudka
import React from 'react';
import FBNavigation from './FotobudkaNavigation';
import SmallCarousel from './SmallCarousel';
import NavigationImages from './NavigationImages';
import FotobudkaInfo from './FotobudkaInfo';
import FotobudkaPrices from './FotobudkaPrices';
import ContactForm from './ContactForm';

import { Helmet } from 'react-helmet';

export default class Fotobudka extends React.Component {
  images = [
    {
      id: 1,
      url: process.env.PUBLIC_URL + '/fotobudka/fotobudka-zakopane.jpg',
      alt: 'fotobudka zakopane',
    },
    {
      id: 2,
      url: process.env.PUBLIC_URL + '/fotobudka/profesjonalna-fotobudka-w-zakopanem.jpg',
      alt: 'profesjonalna fotobudka w zakopanem',
    },
    {
      id: 3,
      url: process.env.PUBLIC_URL + '/fotobudka/fotobudka-rozkreci-impreze.jpg',
      alt: 'fotobudka-rozkreci-impreze',
    },
    {
      id: 4,
      url: process.env.PUBLIC_URL + '/fotobudka/czym-jest-fotobudka.jpg',
      alt: 'czym jest fotobudka?',
    },
  ];

  render() {
    return (
      <div>
        <Helmet>
          <title>MMPStudio Fotobudka - Magiczne urządzenie na Twoją imprezę!</title>
          <meta
            name="description"
            content="Szukasz profesjonalnego urządzenia do robienia zdjęć na weselach ? Na stronie mmpstudio.pl znajdziesz fotobudkę właśnie na Twoje wesele! To fotobudka rozkręci Twoją imprezę i pozwoli gościom zapamiętać ją na długo! Każde selfie drukowane jest w parę sekund!"
          />
        </Helmet>
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
