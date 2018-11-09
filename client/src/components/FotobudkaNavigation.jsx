import React from "react";
import { Link, NavLink } from "react-router-dom";

export default class FBNavigation extends React.Component {
  goToInfo = e => {
    e.preventDefault();
    window.scrollTo(0, this.fbInfoPosition);
  };
  goToOffer = e => {
    e.preventDefault();
    window.scrollTo(0, this.fbOfferPosition);
  };
  goToContact = e => {
    e.preventDefault();
    window.scrollTo(0, this.fbContactPosition);
  };
  goToTop = () => {
    window.scrollTo(0, 0);
  };
  render() {
    return (
      <nav className="fb-nav">
        <div className="nav-wrapper container">
          <ul className="container navigation fb">
            <li>
              <Link to="/fotobudka/">Strona główna</Link>
            </li>
            <li>
              <Link onClick={this.goToInfo} to="/fotobudka/">
                Info
              </Link>
            </li>
            <li>
              <Link onClick={this.goToOffer} to="/fotobudka/">
                Oferta
              </Link>
            </li>
            <li className="logo-container">
              <Link
                onClick={this.goToTop}
                className="brand-logo"
                to="/fotobudka/"
              >
                <img src="logo_fotobudka.png" alt="" />
              </Link>
            </li>
            <li>
              <Link to="/fotobudka/" onClick={this.goToContact}>
                Kontakt
              </Link>
            </li>
            <li>
              <NavLink
                exact
                activeClassName="active-fb"
                to="/fotobudka/galeria"
              >
                Galeria
              </NavLink>
            </li>
            <li>
              <a href="http://google.pl">Strefa Klienta</a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }

  fbInfoElement;
  fbInfoPosition;
  fbOfferElement;
  fbOfferPosition;
  fbContactElement;
  fbContactPosition;

  componentDidMount() {
    this.fbInfoElement = document.getElementById("fotobudka-info");
    this.fbOfferElement = document.getElementById("fb-offer");
    this.fbContactElement = document.getElementById("contact-form");
    this.fbInfoPosition = this.fbInfoElement.offsetTop;
    setTimeout(() => {
      this.fbOfferPosition = this.fbOfferElement.offsetTop;
      this.fbContactPosition = this.fbContactElement.offsetTop;
    }, 1000);
  }
}
