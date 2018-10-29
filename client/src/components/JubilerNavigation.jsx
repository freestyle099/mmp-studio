import React from "react";
import { Link } from "react-router-dom";

export default class JubilerNavigation extends React.Component {
  render() {
    return (
      <nav className="jubiler-nav">
        <div className="nav-wrapper container">
          <Link className="brand-logo" to="/jubiler">
            <img src="logo_jubiler.png" alt="" />
          </Link>
          <ul className="container navigation right">
            <li>
              <Link to="/jubiler">Strona Główna</Link>
            </li>
            <li>
              <Link to="/jubiler/galeria">Galeria</Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
