import React from "react";
import { Link, NavLink } from "react-router-dom";

export default class Navigation extends React.Component {
  goToAbout = e => {
    let scroll = document.getElementById("aboutUs").offsetTop;
    window.scrollTo(0,scroll)
  }
  render() {
    return (
      <div className="nav-container">
        <nav className="main-nav">
          <div className="nav-wrapper container">
            <ul className="container navigation">
              <li>
                <NavLink className='link-left' exact activeClassName="active-main" to="/">
                  Strona Główna
                </NavLink>
              </li>
              <li>
                <NavLink onClick={this.goToAbout} to='/' exact activeClassName="active-main" className='link-left'>
                  O Nas
                </NavLink>
              </li>
              <li className='logo-container'>
                <Link className="brand-logo" to="/">
                  <img src="./logo_studio.png" alt="" />
                </Link>
              </li>
              <li>
                <NavLink exact activeClassName="active-main" to="/galeria">
                  Galeria
                </NavLink>
              </li>
              <li>
                <NavLink exact activeClassName="active-main" to="/galeria">
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

  }
}
