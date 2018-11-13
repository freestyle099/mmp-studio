import React from "react";
import { Link } from "react-router-dom";

export default class JubilerNavigation extends React.Component {
  render() {
    return (
      <div className="nav-container-fb">
        <nav className="jubiler-nav">
          <div className="nav-wrapper container">
            <ul className="container navigation nav-jubiler">
              <li>
                <Link className='jub-link' to="/jubiler">Strona Główna</Link>
              </li>
              <li>
                <Link className='jub-link' to="/jubiler">Usługi</Link>
              </li>
              <li className="logo-container">
                <Link className="brand-logo jub-logo" to="/jubiler">
                  <img src="logo_jubiler.png" alt="" />
                </Link>
              </li>
              <li>
                <Link className='jub-link' to="/jubiler">Kontakt</Link>
              </li>
              <li>
                <Link className='jub-link' to="/jubiler/galeria">Galeria</Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
  componentDidMount() {
    console.log('hi');
  }
}
