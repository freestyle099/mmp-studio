import React from "react";
import { Link, NavLink } from "react-router-dom";

export default class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isTrue: false
    };
  }

  scroll;
  navImg;
  goToAbout = e => {
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
                <NavLink
                  className="link-left"
                  exact
                  activeClassName="active-main"
                  to="/"
                  onClick={this.goToTop}
                >
                  Strona Główna
                </NavLink>
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
                  O Nas
                </NavLink>
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
  componentDidMount() {
    let aboutUs = document.getElementById("aboutUs");
    let navImg = document.getElementById("navImg");
    let nav = document.querySelector(".nav-container");
    nav.classList.add("nav-container-helper");
    if (aboutUs) {
      this.scroll = aboutUs.offsetTop - 100;
    }
    if (navImg) {
      this.navImg = navImg.offsetTop;
    }

    window.addEventListener("resize", () => {
      this.scroll = aboutUs.offsetTop;
      this.navImg = navImg.offsetTop;
    });
    document.addEventListener("scroll", () => {
      if (window.pageYOffset > 200) {
        nav.classList.remove("nav-container-helper");
      } else {
        nav.classList.add("nav-container-helper");
      }
      if (window.pageYOffset > this.navImg) {
        nav.classList.add("navigation-container-scroll");
      } else {
        if (nav.classList.contains("navigation-container-scroll")) {
          nav.classList.remove("navigation-container-scroll");
        }
      }
    });
  }
}
