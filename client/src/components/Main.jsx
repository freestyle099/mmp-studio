// Main MMPStudio
import React from 'react';
import Navigation from './Navigation';
import Carousel from './Carousel';
import NavigationImages from './NavigationImages';
import AboutUs from './AboutUs';
import Contact from './Contact';
import ContactForm from './ContactForm';
import { Helmet } from 'react-helmet';

export default class MMPStudio extends React.Component {
  images = [
    {
      id: 1,
      url: process.env.PUBLIC_URL + '/photos/plener-tatry.jpg',
      alt: 'plener tatry',
    },
    {
      id: 2,
      url: process.env.PUBLIC_URL + '/photos/wesele.jpg',
      alt: 'wesele',
    },
    {
      id: 3,
      url: process.env.PUBLIC_URL + '/photos/weselny-plener-w-tatrach.jpg',
      alt: 'weselny plener w tatrach',
    },
    {
      id: 4,
      url: process.env.PUBLIC_URL + '/photos/plener-tatry-zachodnie.jpg',
      alt: 'plener tatry zachodnie',
    },
    {
      id: 5,
      url: process.env.PUBLIC_URL + '/photos/morskie-oko.jpg',
      alt: 'morskie oko',
    },
    {
      id: 6,
      url: process.env.PUBLIC_URL + '/photos/plener-na-slowacji.jpg',
      alt: 'plener na słowacji',
    },
    {
      id: 7,
      url: process.env.PUBLIC_URL + '/photos/obraczki.jpg',
      alt: 'obrączki',
    },
    {
      id: 8,
      url: process.env.PUBLIC_URL + '/photos/wesele-widok-z-gubalowki.jpg',
      alt: 'wesele widok z gubałówki',
    },
    {
      id: 9,
      url: process.env.PUBLIC_URL + '/photos/plener-na-polanie-w-zakopanem.jpg',
      alt: 'plener na polanie w zakopanem',
    },
  ];

  render() {
    return (
      <div>
        <Helmet>
          <title>MMPStudio - Profesjonalny fotograf w Zakopanem</title>
          <meta
            name="description"
            content="Szukasz fotografa na własną imprezę? MMPStudio to firma stworzona właśnie dla Ciebie! Oferujemy profesjonalne robienie zdjęć na weselach, komuniach, chrzcinach i różnego typu imprezach. Fotografią zajmujemy się już kilka lat. Doświadczenie i pełne zaangażowanie to nasze atuty! Sprawdź naszą ofertę!"
          />
        </Helmet>
        <div className="navigation-container">
          <Navigation />
          <Carousel images={this.images} />
        </div>
        <NavigationImages />
        <AboutUs />
        <Contact />
        <ContactForm from="MMPStudio" active="input-bottom-main" btn="btn-main" class="main" />
      </div>
    );
  }
}
