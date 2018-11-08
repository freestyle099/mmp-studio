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

  goToAbout = e => {
    if (!this.state.isMain) {
      e.preventDefault();
    }
    window.scrollTo(0, this.scroll);
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
                {/*<a href="/#aboutUs">Siema</a>*/}
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
                <NavLink
                  onClick={this.goToAbout}
                  to="/"
                  activeClassName={
                    window.pageYOffset > this.scroll ? "active-main" : ""
                  }
                  className="link-left"
                >
                  Kontakt
                </NavLink>
              </li>

              <li className="logo-container">
                <NavLink className="brand-logo" to="/">
                  <img src="./logo_studio.png" alt="" />
                </NavLink>
              </li>

              <li>
                <NavLink exact activeClassName="active-main" to="/galeria">
                  Galeria
                </NavLink>
              </li>
              <li>
                <NavLink exact activeClassName="active-main" to="/wideo">
                  Wideo
                </NavLink>
              </li>
              <li>
                <NavLink exact activeClassName="active-main" to="/wideo">
                  Strefa klienta
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
  lastScrollTop = 0;
  main;
  linkAboutUs;

  resize = () => {
    if (this.aboutUs) {
      this.scroll = this.aboutUs.offsetTop;
    }
    if (this.navImgElement) {
      this.navImg = this.navImgElement.offsetTop;
    }
  };
  scrollFunction = () => {
    let st = window.pageYOffset;
    if (window.pageYOffset > this.scroll - 100) {
      this.main.classList.remove("active-main");
      this.linkAboutUs.classList.add("active-main");
    } else {
      this.main.classList.add("active-main");
      this.linkAboutUs.classList.remove("active-main");
    }
    if (st > this.lastScrollTop) {
      if (this.nav.classList.contains("navigation-container-scroll")) {
        this.nav.classList.remove("entering");
        this.nav.classList.add("leaving");
      }
    } else {
      this.nav.classList.remove("leaving");
      if (window.pageYOffset > this.navImg || window.pageYOffset > 500) {
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
    if (window.location.pathname === "/") {
      this.setState({
        isMain: true
      });
    }
    this.aboutUs = document.getElementById("aboutUs");
    this.navImgElement = document.getElementById("navImg");
    this.main = document.getElementById("main");
    this.linkAboutUs = document.getElementById("link-aboutUs");
    this.nav = document.querySelector(".nav-container");

    if (this.aboutUs) {
      this.scroll = this.aboutUs.offsetTop;
    }
    if (this.navImgElement) {
      this.navImg = this.navImgElement.offsetTop;
    }

    window.addEventListener("resize", this.resize);
    document.addEventListener("scroll", this.scrollFunction);
  }

  componentWillUnmount() {
    document.removeEventListener("resize", this.resize);
    window.removeEventListener("scroll", this.scrollFunction);
  }
}
