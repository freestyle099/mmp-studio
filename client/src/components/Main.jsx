// Main MMPStudio
import React from 'react';
import Navigation from './Navigation';
import Carousel from './Carousel';
import NavigationImages from './NavigationImages';
import AboutUs from './AboutUs';
import Contact from './Contact';
import ContactForm from './ContactForm';

export default class MMPStudio extends React.Component {
  images = [
    {
      id: 1,
      url: 'photos/(1389).jpg',
    },
    {
      id: 2,
      url: 'photos/Marysia_Tomasz_2871.jpg',
    },
    {
      id: 3,
      url: 'photos/Wesele_Ewa_Krzysztof_1244.jpg',
    },
    {
      id: 4,
      url: 'photos/Wesele_Ewa_Krzysztof_2016.jpg',
    },
    {
      id: 5,
      url: 'photos/Marysia_Tomasz_2893.jpg',
    },
  ];

  render() {
    return (
      <div>
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
