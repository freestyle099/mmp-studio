import React from 'react';
import { Link } from 'react-router-dom';

export default class NavigationImages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      class: 'nav-img-container',
    };
  }

  goToTop = () => {
    return window.scrollTo(0, 0);
  };
  render() {
    return (
      <section id="navImg" className={'nav-img-container ' + this.state.class}>
        <div className="container">
          <h2>Zajmujemy się jeszcze...</h2>

          <div className="navigation-images">
            <div className="valign-wrapper">
              <Link onClick={this.goToTop} to="/">
                <img src={process.env.PUBLIC_URL + '/mmpstudio-fotograf-zakopane.png'} alt="mmpstudio fotograf zakopane" />
                <h3>Fotografia ślubna i okolicznościowa</h3>
              </Link>
            </div>
            <div className="valign-wrapper">
              <Link onClick={this.goToTop} to="/fotobudka/">
                <img src={process.env.PUBLIC_URL + '/fotobudka-zakopane.png'} alt="fotobudka zakopane" />
                <h3>Klasyczna fotobudka w nowoczesnym stylu</h3>
              </Link>
            </div>
            <div className="valign-wrapper">
              <Link onClick={this.goToTop} to="/jubiler/">
                <img src={process.env.PUBLIC_URL + '/jubiler-zakopane.png'} alt="jubiler-zakopane" />
                <h3>Obrączki ślubne i wyroby jubilerskie</h3>
              </Link>
            </div>
          </div>
        </div>
      </section>
    );
  }
  componentDidMount() {
    if (window.location.href.indexOf('fotobudka') > 1) {
      this.setState({
        class: 'nav-img-container-fb',
      });
    }
    if (window.location.href.indexOf('jubiler') > 1) {
      this.setState({
        class: 'nav-img-container-jubiler',
      });
    }
  }
}
