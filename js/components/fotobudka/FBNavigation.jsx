import React from "react";
import { NavLink } from "react-router-dom";

export default class FotobudkaNavigation extends React.Component {
  render() {
    return (
      <div className="header fb">
        <nav className="container">
          <div className="logo">MMP Studio Fotobudka</div>
          <ul className="navigation">
            <li>
              <NavLink to="/fotobudka">Home</NavLink>
            </li>
            <li>
              <NavLink to="/fotobudka/galeria">Galeria</NavLink>
            </li>
            <li>
              <NavLink to="/fotobudka/kontakt">Kontakt</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}
