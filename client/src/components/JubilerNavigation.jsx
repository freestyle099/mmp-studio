import React from "react";
import { Link, Redirect } from "react-router-dom";

export default class JubilerNavigation extends React.Component {
  goto = selector => {
    if (window.location.pathname !== "/jubiler") {
      this.constructor.changeUrl();
    }
    let checkExist = setInterval(() => {
      let element = document.getElementById(selector);
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
        clearInterval(checkExist);
      }
    }, 100);
  };
  static changeUrl() {
    return <Redirect to="/fotobudka/" />;
  }
  goToMain = () => {
    this.goto("main-page-jub");
  };
  goToServices = () => {
    this.goto("jub-services");
  };
  goToContact = () => {
    this.goto("jub-contact");
  };

  render() {
    return (
      <div className="nav-container-fb">
        <nav className="jubiler-nav">
          <div className="nav-wrapper container">
            <ul className="container navigation nav-jubiler">
              <li>
                <Link
                  id='jub-main-link'
                  onClick={this.goToMain}
                  className="jub-link"
                  to="/jubiler"
                >
                  O nas
                </Link>
              </li>
              <li>
                <Link
                  onClick={this.goToServices}
                  className="jub-link"
                  to="/jubiler"
                >
                  Usługi
                </Link>
              </li>
              <li className="logo-container">
                <Link className="brand-logo jub-logo" to="/jubiler">
                  <img src="logo_jubiler.png" alt="" />
                </Link>
              </li>
              <li>
                <Link
                  onClick={this.goToContact}
                  className="jub-link"
                  to="/jubiler"
                >
                  Kontakt
                </Link>
              </li>
              <li>
                <Link className="jub-link" to="/jubiler/galeria">
                  Galeria
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
  componentDidMount() {
    console.log("hi");
  }
}
