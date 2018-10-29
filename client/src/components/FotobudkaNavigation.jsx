import React from "react";
import { Link, NavLink } from "react-router-dom";

export default class FBNavigation extends React.Component {
  render() {
    return (
      <nav className="fb-nav">
        <div className="nav-wrapper container">
          <Link className="brand-logo" to="/fotobudka/">
            <img src="logo_fotobudka.png" alt="" />
          </Link>
          <ul className="container navigation right">
            <li>
              <NavLink exact activeClassName="active-fb" to="/fotobudka/">
                Strona główna
              </NavLink>
            </li>
            <li>
              <NavLink
                exact
                activeClassName="active-fb"
                to="/fotobudka/kontakt"
              >
                Kontakt
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
