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
      url: 'photos/1.jpg',
    },
    {
      id: 2,
      url: 'photos/2.jpg',
    },
    {
      id: 3,
      url: 'photos/3.jpg',
    },
    {
      id: 4,
      url: 'photos/4.jpg',
    },
    {
      id: 5,
      url: 'photos/5.jpg',
    },
    {
      id: 6,
      url: 'photos/6.jpg',
    },
    {
      id: 7,
      url: 'photos/7.jpg',
    },
    {
      id: 8,
      url: 'photos/8.jpg',
    },
    {
      id: 9,
      url: 'photos/9.jpg',
    },
  ];

  render() {
    return (
      <div>
        <Helmet>
          <title>Michał Fornalski</title>
          <meta name="description" content="Studio fotograficzne Michał Fornalski" />
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
