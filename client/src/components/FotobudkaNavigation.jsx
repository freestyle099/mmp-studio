import React from "react";
import { Link, NavLink } from "react-router-dom";

export default class FBNavigation extends React.Component {
  render() {
    return (
      <nav className="fb-nav">
        <div className="nav-wrapper container">
          <ul className="container navigation fb">
            <li>
              <NavLink exact activeClassName="active-fb" to="/fotobudka/">
                Strona główna
              </NavLink>
            </li>
            <li>
              <NavLink exact activeClassName="active-fb" to="/fotobudka/">
                Info
              </NavLink>
            </li>
            <li>
              <NavLink exact activeClassName="active-fb" to="/fotobudka/">
                Oferta
              </NavLink>
            </li>
            <li className="logo-container">
              <Link className="brand-logo" to="/fotobudka/">
                <img src="logo_fotobudka.png" alt="" />
              </Link>
            </li>
            <li>
              <NavLink
                exact
                activeClassName="active-fb"
                to="/fotobudka/galeria"
              >
                Kontakt
              </NavLink>
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
    );
  }
}
