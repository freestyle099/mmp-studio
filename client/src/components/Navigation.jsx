import React from "react";
import { Link, NavLink } from "react-router-dom";

export default class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isMain: false
    };
  }

  scroll;
  navImg;
  aboutUs;
  navImgElement;
  nav;
  contactElement;
  contact;
  lastScrollTop = 0;
  main;
  linkAboutUs;
  linkContact;

  goToAbout = e => {
    if (!this.state.isMain) {
      e.preventDefault();
    }
    window.scrollTo(0, this.scroll);
  };
  goToContact = e => {
    if (!this.state.isMain) {
      e.preventDefault();
    }
    window.scrollTo(0, this.contact);
  };
  goToTop = () => {
    window.scrollTo(0, 0);
  };
  render() {
    return (
      <div className="nav-container">
        <nav className="main-nav">
          <div className="nav-wrapper container">
            <ul className="container navigation">
              <li>
                <Link
                  className="link-left"
                  to="/"
                  onClick={this.goToTop}
                  id="main"
                >
                  Strona Główna
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className={
                    !this.state.isMain ? "disabled link-left" : "link-left"
                  }
                  onClick={this.goToAbout}
                  id="link-aboutUs"
                >
                  O Nas
                </Link>
              </li>
              <li>
                <Link
                  id="link-contact"
                  onClick={this.goToContact}
                  to="/"
                  className={
                    !this.state.isMain ? "disabled link-left" : "link-left"
                  }
                >
                  Kontakt
                </Link>
              </li>

              <li className="logo-container">
                <NavLink onClick={this.goToTop} className="brand-logo" to="/">
                  <img src="./logo_studio.png" alt="" />
                </NavLink>
              </li>

              <li>
                <NavLink
                  onClick={this.goToTop}
                  exact
                  activeClassName="active-main-right"
                  to="/galeria"
                >
                  Galeria
                </NavLink>
              </li>
              <li>
                <NavLink
                  onClick={this.goToTop}
                  exact
                  activeClassName="active-main-right"
                  to="/wideo"
                >
                  Wideo
                </NavLink>
              </li>
              <li>
                <a href="http://google.pl">Strefa klienta</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }

  resize = () => {
    if (this.aboutUs) {
      this.scroll = this.aboutUs.offsetTop;
    }
    if (this.navImgElement) {
      this.navImg = this.navImgElement.offsetTop;
    }
    if (this.contactElement) {
      this.contact = this.contactElement.offsetTop;
    }
  };
  scrollFunction = () => {
    // Navigation active class
    if (window.location.pathname === "/") {
      if (
        window.pageYOffset > this.scroll - 100 &&
        window.pageYOffset < this.contact - 100
      ) {
        this.main.classList.remove("active-main");
        this.linkAboutUs.classList.add("active-main");
        this.linkContact.classList.remove("active-main");
      } else if (window.pageYOffset > this.contact - 100) {
        this.main.classList.remove("active-main");
        this.linkAboutUs.classList.remove("active-main");
        this.linkContact.classList.add("active-main");
      } else {
        this.main.classList.add("active-main");
        this.linkAboutUs.classList.remove("active-main");
        this.linkContact.classList.remove("active-main");
      }
    }

    // Detect scroll direction
    let st = window.pageYOffset;

    if (st > this.lastScrollTop) {
      if (this.nav.classList.contains("navigation-container-scroll")) {
        this.nav.classList.remove("entering");
        this.nav.classList.add("leaving");
      }
    } else {
      this.nav.classList.remove("leaving");
      if (window.pageYOffset > this.navImg || window.pageYOffset > 800) {
        this.nav.classList.add("navigation-container-scroll");
        this.nav.classList.add("entering");
      } else {
        if (this.nav.classList.contains("navigation-container-scroll")) {
          this.nav.classList.remove("navigation-container-scroll");
          this.nav.classList.remove("entering");
        }
      }
    }
    this.lastScrollTop = st <= 0 ? 0 : st;
  };

  componentDidMount() {
    this.aboutUs = document.getElementById("aboutUs");
    this.navImgElement = document.getElementById("navImg");
    this.main = document.getElementById("main");
    this.linkAboutUs = document.getElementById("link-aboutUs");
    this.linkContact = document.getElementById("link-contact");
    this.nav = document.querySelector(".nav-container");
    this.contactElement = document.getElementById("contact");

    if (window.location.pathname === "/") {
      this.main.classList.add("active-main");
      this.setState({
        isMain: true
      });
    } else {
      this.nav.classList.add("navigation-other");
    }

    if (this.aboutUs) {
      this.scroll = this.aboutUs.offsetTop;
    }
    if (this.navImgElement) {
      this.navImg = this.navImgElement.offsetTop;
    }
    if (this.contactElement) {
      setTimeout(() => {
        this.contact = this.contactElement.offsetTop;
      }, 1000);
    }

    window.addEventListener("resize", this.resize);
    document.addEventListener("scroll", this.scrollFunction);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.resize);
    document.removeEventListener("scroll", this.scrollFunction);
  }
}
