import React from "react";
import { Link, NavLink } from "react-router-dom";

export default class Navigation extends React.Component {
  render() {
    return (
      <div>
        <nav className="main-nav">
          <div className="nav-wrapper container">
            <Link className="brand-logo" to="/">
              <img src="./logo_studio.png" alt="" />
            </Link>
            <ul className="container navigation right">
              <li>
                <NavLink exact activeClassName="active-main" to="/">
                  Strona Główna
                </NavLink>
              </li>
              <li>
                <NavLink exact activeClassName="active-main" to="/galeria">
                  Galeria
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}