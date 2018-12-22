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
      <div id="navImg" className={'nav-img-container ' + this.state.class}>
        <div className="container">
          <h2>Zajmujemy się jeszcze...</h2>

          <div className="navigation-images">
            <div className="valign-wrapper">
              <Link onClick={this.goToTop} to="/">
                <img src={process.env.PUBLIC_URL + '/logo_studio.png'} alt="" />
                <p>Fotografia ślubna i okolicznościowa</p>
              </Link>
            </div>
            <div className="valign-wrapper">
              <Link onClick={this.goToTop} to="/fotobudka/">
                <img src={process.env.PUBLIC_URL + '/logo_fotobudka.png'} />
                <p>Klasyczna fotobudka w nowoczesnym stylu</p>
              </Link>
            </div>
            <div className="valign-wrapper">
              <Link onClick={this.goToTop} to="/jubiler/">
                <img src={process.env.PUBLIC_URL + '/logo_jubiler.png'} alt="" />
                <p>Obrączki ślubne i wyroby jubilerskie</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
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
