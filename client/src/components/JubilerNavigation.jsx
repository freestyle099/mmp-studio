import React from 'react';
import { Link, NavLink, Redirect } from 'react-router-dom';

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
  showMenu = e => {
    this.menu.classList.toggle('show-menu-jub');
    this.menuButton.classList.toggle('menu-button-show');
  };

  render() {
    return (
      <div>
        <div className="logo-phone">
          <NavLink onClick={this.goToTop} className="brand-logo" to="/jubiler/">
            <img src="./logo_jubiler.png" alt="" />
          </NavLink>
        </div>
        <div className="menu-button" onClick={this.showMenu}>
          <i className="fas fa-bars" />
        </div>
        <nav className="main-aside aside-jub">
          <ul className="menu-aside">
            <li>
              <Link id="jub-main-link-phone" onClick={this.goToMain} className="jub-link" to="/jubiler/">
                O nas
              </Link>
            </li>
            <li>
              <Link id="jub-services-link-phone" onClick={this.goToServices} className="jub-link" to="/jubiler/">
                Usługi
              </Link>
            </li>
            <li>
              <Link id="jub-contact-link-phone" onClick={this.goToContact} className="jub-link" to="/jubiler/">
                Kontakt
              </Link>
            </li>
            <li>
              <NavLink onClick={this.goToTop} exact activeClassName="active-jub" to="/jubiler/galeria">
                Galeria
              </NavLink>
            </li>
          </ul>
        </nav>

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
                  <NavLink onClick={this.goToTop} className="jub-link" activeClassName="active-jub" to="/jubiler/galeria">
                    Galeria
                  </NavLink>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    );
  }

  nav;
  mainLink;
  mainLinkPhone;
  servicesLink;
  servicesLinkPhone;
  contactLink;
  contactLinkPhone;
  aboutUsPosition;
  servicesPosition;
  contactPosition;

  scrollFunction = () => {
    if (window.location.pathname === '/jubiler/') {
      if (window.pageYOffset < this.servicesPosition - 300) {
        this.mainLink.classList.add('active-jub');
        this.servicesLink.classList.remove('active-jub');
        this.contactLink.classList.remove('active-jub');
      } else if (window.pageYOffset > this.servicesPosition - 400 && window.pageYOffset < this.contactPosition - 400) {
        this.contactLink.classList.remove('active-jub');
        this.servicesLink.classList.add('active-jub');
        this.mainLink.classList.remove('active-jub');
      } else {
        this.contactLink.classList.add('active-jub');
        this.mainLink.classList.remove('active-jub');
        this.servicesLink.classList.remove('active-jub');
      }

      if (window.pageYOffset < this.servicesPosition - 300) {
        this.servicesLinkPhone.classList.remove('active-jub');
        this.mainLinkPhone.classList.add('active-jub');
        this.contactLinkPhone.classList.remove('active-jub');
      } else if (window.pageYOffset > this.servicesPosition - 300 && window.pageYOffset < this.contactPosition - 300) {
        this.contactLinkPhone.classList.remove('active-jub');
        this.servicesLinkPhone.classList.add('active-jub');
        this.mainLinkPhone.classList.remove('active-jub');
      } else if (window.pageYOffset > this.contactPosition - 300) {
        this.contactLinkPhone.classList.add('active-jub');
        this.mainLinkPhone.classList.remove('active-jub');
        this.servicesLinkPhone.classList.remove('active-jub');
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
    this.menu = document.querySelector('.main-aside');
    this.menuButton = document.querySelector('.menu-button');
    this.mainLink = document.getElementById('jub-main-link');
    this.mainLinkPhone = document.getElementById('jub-main-link-phone');
    this.servicesLink = document.getElementById('jub-services-link');
    this.servicesLinkPhone = document.getElementById('jub-services-link-phone');
    this.contactLink = document.getElementById('jub-contact-link');
    this.contactLinkPhone = document.getElementById('jub-contact-link-phone');
    if (window.location.pathname === '/jubiler/') {
      this.mainLink.classList.add('active-jub');
      this.mainLinkPhone.classList.add('active-jub');
      this.aboutUsPosition = document.getElementById('jub-aboutUs').offsetTop;
      this.servicesPosition = document.getElementById('jub-services').offsetTop;
      this.contactPosition = document.getElementById('jub-contact').offsetTop;
      console.log(this.servicesPosition);
    }

    document.addEventListener('scroll', this.scrollFunction);
  }
  componentWillUnmount() {
    document.removeEventListener('scroll', this.scrollFunction);
  }
}
