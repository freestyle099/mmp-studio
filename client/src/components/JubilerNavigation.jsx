import React from 'react';
import { Link, Redirect } from 'react-router-dom';

export default class JubilerNavigation extends React.Component {
  goto = selector => {
    if (window.location.pathname !== '/jubiler') {
      this.constructor.changeUrl();
    }
    let checkExist = setInterval(() => {
      let element = document.getElementById(selector);
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
        clearInterval(checkExist);
      }
    }, 100);
  };
  static changeUrl() {
    return <Redirect to="/fotobudka/" />;
  }
  goToMain = () => {
    this.goto('main-page-jub');
  };
  goToServices = () => {
    this.goto('jub-services');
  };
  goToContact = () => {
    this.goto('jub-contact');
  };
  goToTop = () => {
    document.body.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  render() {
    return (
      <div className="nav-container-jub">
        <nav className="jubiler-nav">
          <div className="container">
            <ul className="navigation nav-jubiler">
              <li>
                <Link id="jub-main-link" onClick={this.goToMain} className="jub-link" to="/jubiler/">
                  O nas
                </Link>
              </li>
              <li>
                <Link id="jub-services-link" onClick={this.goToServices} className="jub-link" to="/jubiler/">
                  Usługi
                </Link>
              </li>
              <li className="logo-container">
                <Link onClick={this.goToTop} className="brand-logo jub-logo" to="/jubiler/">
                  <img src="logo_jubiler.png" alt="" />
                </Link>
              </li>
              <li>
                <Link id="jub-contact-link" onClick={this.goToContact} className="jub-link" to="/jubiler/">
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

  nav;
  mainLink;
  servicesLink;
  contactLink;
  aboutUsPosition;
  servicesPosition;
  contactPosition;

  scrollFunction = () => {
    if (window.location.pathname === '/jubiler/') {
      if (window.pageYOffset < this.servicesPosition - 200) {
        this.servicesLink.classList.remove('active-jub');
        this.mainLink.classList.add('active-jub');
        this.contactLink.classList.remove('active-jub');
      } else if (window.pageYOffset > this.servicesPosition - 200 && window.pageYOffset < this.contactPosition - 200) {
        this.contactLink.classList.remove('active-jub');
        this.servicesLink.classList.add('active-jub');
        this.mainLink.classList.remove('active-jub');
      } else if (window.pageYOffset > this.contactPosition - 200) {
        this.contactLink.classList.add('active-jub');
        this.mainLink.classList.remove('active-jub');
        this.servicesLink.classList.remove('active-jub');
      }
    }

    // Detect scroll direction
    let st = window.pageYOffset;
    if (st > this.lastScrollTop) {
      if (this.nav.classList.contains('navigation-container-scroll')) {
        this.nav.classList.remove('entering-jub');
        this.nav.classList.add('leaving-jub');
      }
    } else {
      this.nav.classList.remove('leaving-jub');
      if (window.pageYOffset > this.navImgPosition || window.pageYOffset > 700) {
        this.nav.classList.add('navigation-container-scroll');
        this.nav.classList.add('entering-jub');
      } else {
        if (this.nav.classList.contains('navigation-container-scroll')) {
          this.nav.classList.remove('navigation-container-scroll');
          this.nav.classList.remove('entering-jub');
        }
      }
    }
    this.lastScrollTop = st <= 0 ? 0 : st;
  };
  componentDidMount() {
    this.nav = document.querySelector('.nav-container-jub');
    if (window.location.pathname === '/jubiler/') {
      this.mainLink = document.getElementById('jub-main-link');
      this.servicesLink = document.getElementById('jub-services-link');
      this.contactLink = document.getElementById('jub-contact-link');
      this.aboutUsPosition = document.getElementById('jub-aboutUs').offsetTop;
      this.servicesPosition = document.getElementById('jub-services').offsetTop;
      this.contactPosition = document.getElementById('jub-contact').offsetTop;
    }

    window.addEventListener('scroll', this.scrollFunction);
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.scrollFunction);
  }
}
