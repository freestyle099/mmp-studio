import React from "react";
import { NavLink } from "react-router-dom";

class MMPStudioNavigation extends React.Component {
  render() {
    return (
      <div className='header'>
        <nav className="container">
          <div className="logo">MMP STUDIO</div>
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

export default MMPStudioNavigation;
