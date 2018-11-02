// Main MMPStudio
import React from "react";
import Navigation from "./Navigation";
import Carousel from "./Carousel";
import NavigationImages from "./NavigationImages";
import AboutUs from "./AboutUs";
import Contact from "./Contact";
import ContactForm from "./ContactForm";

export default class MMPStudio extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: []
    };
  }

  render() {
    return (
      <div>
        <Navigation />
        <Carousel images={this.state.images} />
        <NavigationImages />
        <AboutUs />
        <Contact />
        <ContactForm btn='btn-main' class="main" />
      </div>
    );
  }
  componentDidMount() {
    fetch("/api/images")
      .then(resp => resp.json())
      .then(data => {
        this.setState({
          images: data
        });
      });
  }
}
