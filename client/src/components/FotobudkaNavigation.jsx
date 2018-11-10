import React from "react";
import { Link, NavLink, Redirect } from "react-router-dom";

export default class FBNavigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isFb: false
    };
  }

  goToInfo = e => {
    e.preventDefault();
    if (window.location.pathname === "/fotobudka/") {
      this.fbInfoElement.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  };
  goToOffer = e => {
    e.preventDefault();
    if (window.location.pathname === "/fotobudka/") {
      this.fbOfferElement.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  };
  changeUrl() {
    return <Redirect to="/fotobudka/" />;
  }
  goto = () => {
    setTimeout(() => {
      let fbContactElement = document.getElementById("contact-form");
      fbContactElement.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }, 100);
  };
  goToContact = e => {
    if (window.location.pathname === "/fotobudka/") {
      this.fbContactElement.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
    if (window.location.pathname !== "/fotobudka") {
      this.changeUrl();
      this.goto();
    }
  };
  goToTop = () => {
    document.body.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  };

  render() {
    return (
      <div className="nav-container-fb">
        <nav className="fb-nav">
          <div className="nav-wrapper container">
            <ul className="container navigation fb">
              <li>
                <Link id="fb-main" onClick={this.goToTop} to="/fotobudka/">
                  Strona główna
                </Link>
              </li>
              <li>
                <Link
                  id="fb-info"
                  className={!this.state.isFb ? "disabled" : ""}
                  onClick={this.goToInfo}
                  to="/fotobudka/"
                >
                  Info
                </Link>
              </li>
              <li>
                <Link
                  id="fb-offerLink"
                  className={!this.state.isFb ? "disabled" : ""}
                  onClick={this.goToOffer}
                  to="/fotobudka/"
                >
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
                <Link
                  id="fb-contact"
                  to="/fotobudka/"
                  onClick={this.goToContact}
                >
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
      </div>
    );
  }

  fbInfoElement;
  fbInfoPosition;
  fbOfferElement;
  fbOfferPosition;
  fbContactElement;
  fbContactPosition;
  nav;
  navImg;
  navImgPosition;
  fbMainLink;
  fbInfoLink;
  fbOfferLink;
  fbContactLink;

  scrollFunction = () => {
    if (window.pageYOffset < this.navImgPosition) {
      this.fbMainLink.classList.add("active-fb");
      this.fbInfoLink.classList.remove("active-fb");
      this.fbOfferLink.classList.remove("active-fb");
      this.fbContactLink.classList.remove("active-fb");
    } else if (
      window.pageYOffset > this.navImgPosition &&
      window.pageYOffset < this.fbOfferPosition
    ) {
      this.fbMainLink.classList.remove("active-fb");
      this.fbInfoLink.classList.add("active-fb");
      this.fbOfferLink.classList.remove("active-fb");
      this.fbContactLink.classList.remove("active-fb");
    } else if (
      window.pageYOffset > this.fbOfferPosition &&
      window.pageYOffset < this.fbContactPosition
    ) {
      this.fbMainLink.classList.remove("active-fb");
      this.fbInfoLink.classList.remove("active-fb");
      this.fbOfferLink.classList.add("active-fb");
      this.fbContactLink.classList.remove("active-fb");
    } else {
      this.fbMainLink.classList.remove("active-fb");
      this.fbInfoLink.classList.remove("active-fb");
      this.fbOfferLink.classList.remove("active-fb");
      this.fbContactLink.classList.add("active-fb");
    }

    // Detect scroll direction
    let st = window.pageYOffset;

    if (st > this.lastScrollTop) {
      if (this.nav.classList.contains("navigation-container-scroll")) {
        this.nav.classList.remove("entering-fb");
        this.nav.classList.add("leaving-fb");
      }
    } else {
      this.nav.classList.remove("leaving-fb");
      if (
        window.pageYOffset > this.navImgPosition ||
        window.pageYOffset > 700
      ) {
        this.nav.classList.add("navigation-container-scroll");
        this.nav.classList.add("entering-fb");
      } else {
        if (this.nav.classList.contains("navigation-container-scroll")) {
          this.nav.classList.remove("navigation-container-scroll");
          this.nav.classList.remove("entering-fb");
        }
      }
    }
    this.lastScrollTop = st <= 0 ? 0 : st;
  };
  componentDidMount() {
    document.addEventListener("scroll", this.scrollFunction);
    this.nav = document.querySelector(".nav-container-fb");
    this.navImg = document.getElementById("navImg");
    this.fbMainLink = document.getElementById("fb-main");
    this.fbInfoLink = document.getElementById("fb-info");
    this.fbOfferLink = document.getElementById("fb-offerLink");
    this.fbContactLink = document.getElementById("fb-contact");

    if (this.navImg) {
      this.navImgPosition = this.navImg.offsetTop;
    }
    if (window.location.pathname === "/fotobudka/") {
      this.fbMainLink.classList.add("active-fb");
      this.fbInfoElement = document.getElementById("fotobudka-info");
      this.fbOfferElement = document.getElementById("fb-offer");
      this.fbContactElement = document.getElementById("contact-form");
      this.fbInfoPosition = this.fbInfoElement.offsetTop;
      this.fbOfferPosition = this.fbOfferElement.offsetTop;
      this.fbContactPosition = this.fbContactElement.offsetTop;

      this.setState({
        isFb: true
      });
    }
  }

  componentWillUnmount() {
    document.removeEventListener("scroll", this.scrollFunction);
  }
}
