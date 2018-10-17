import React from "react";
import { NavLink } from "react-router-dom";

export default class MMPStudioHeader extends React.Component {
  render() {
    return (
      <div className="header main">
        <nav className="container">
          <div className="logo">
            <NavLink to='/'>
              <img src="../../../images/logo_studio.png" alt="" />
            </NavLink>
          </div>
          <ul className="navigation">
            <li>
              <NavLink to="/">Strona Główna</NavLink>
            </li>
            <li>
              <NavLink to="/galeria">Galeria</NavLink>
            </li>
            <li>
              <NavLink to="/kontakt">Kontakt</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}
