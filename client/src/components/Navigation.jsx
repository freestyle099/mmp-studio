import React from "react";
import { Link, NavLink } from "react-router-dom";

export default class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isTrue: false
    }
  }

  scroll;
  navImg;
  goToAbout = e => {
    window.scrollTo(0, this.scroll);
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
            </ul>
          </div>
        </nav>
      </div>
    );
  }
  componentDidMount() {
    let aboutUs = document.getElementById('aboutUs');
    let navImg = document.getElementById('navImg');

    if(aboutUs) {
      this.scroll = aboutUs.offsetTop
    }
    if(navImg) {
      this.navImg = navImg.offsetTop
    }

    window.addEventListener('resize', () => {
      this.scroll = document.getElementById('aboutUs').offsetTop
    });
    document.addEventListener('scroll', () => {
      if(window.pageYOffset > this.navImg - 100) {
        console.log('hi');
      }
    })
  }
}
