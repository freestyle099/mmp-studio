import React from 'react';
import { Link, NavLink, Redirect } from 'react-router-dom';

export default class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isMain: false,
      phone: false,
    };
  }

  scroll;
  navImg;
  aboutUs;
  navImgElement;
  nav;
  contactElement;
  contact;
  lastScrollTop = 0;
  main;
  linkAboutUs;
  linkContact;
  menu;
  menuButton;

  goto = selector => {
    if (window.location.pathname !== '/') {
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
  goToAbout = () => {
    this.goto('aboutUs');
  };
  goToContact = e => {
    this.goto('contact');
  };
  goToTop = () => {
    document.body.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };
  showMenu = () => {
    this.menu.classList.toggle('show-menu');
    this.menuButton.classList.toggle('menu-button-show');
  };
  render() {
    return (
      <div>
        <div className="menu-button" onClick={this.showMenu}>
          <i className="fas fa-bars" />
        </div>
        <nav className="main-aside">
          <ul className="menu-aside">
            <li>Siema</li>
            <li>Siema</li>
          </ul>
        </nav>
        <div className="nav-container">
          <nav className="main-nav">
            <div className="container">
              <ul className="navigation">
                <li>
                  <Link className="link-left" to="/" onClick={this.goToTop} id="main">
                    Strona Główna
                  </Link>
                </li>
                <li>
                  <Link to="/" className="link-left" onClick={this.goToAbout} id="link-aboutUs">
                    O Nas
                  </Link>
                </li>
                <li>
                  <Link className="link-left" id="link-contact" onClick={this.goToContact} to="/">
                    Kontakt
                  </Link>
                </li>

                <li className="logo-container">
                  <NavLink onClick={this.goToTop} className="brand-logo" to="/">
                    <img src="./logo_studio.png" alt="" />
                  </NavLink>
                </li>

                <li>
                  <NavLink onClick={this.goToTop} exact activeClassName="active-main-right" to="/galeria">
                    Galeria
                  </NavLink>
                </li>
                <li>
                  <NavLink onClick={this.goToTop} exact activeClassName="active-main-right" to="/wideo">
                    Wideo
                  </NavLink>
                </li>
                <li>
                  <a href="https://mmpstudio.smugmug.com/Strefa-Klienta">Strefa klienta</a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    );
  }

  scrollFunction = () => {
    // Navigation active class
    if (window.location.pathname === '/') {
      if (window.pageYOffset > this.scroll - 200 && window.pageYOffset < this.contact - 200) {
        this.main.classList.remove('active-main');
        this.linkAboutUs.classList.add('active-main');
        this.linkContact.classList.remove('active-main');
      } else if (window.pageYOffset > this.contact - 200) {
        this.main.classList.remove('active-main');
        this.linkAboutUs.classList.remove('active-main');
        this.linkContact.classList.add('active-main');
      } else {
        this.main.classList.add('active-main');
        this.linkAboutUs.classList.remove('active-main');
        this.linkContact.classList.remove('active-main');
      }
    }

    // Detect scroll direction
    let st = window.pageYOffset;

    if (st > this.lastScrollTop) {
      if (this.nav.classList.contains('navigation-container-scroll')) {
        this.nav.classList.remove('entering');
        this.nav.classList.add('leaving');
      }
    } else {
      this.nav.classList.remove('leaving');
      if (window.pageYOffset > this.navImg || window.pageYOffset > 800) {
        this.nav.classList.add('navigation-container-scroll');
        this.nav.classList.add('entering');
      } else {
        if (this.nav.classList.contains('navigation-container-scroll')) {
          this.nav.classList.remove('navigation-container-scroll');
          this.nav.classList.remove('entering');
        }
      }
    }
    this.lastScrollTop = st <= 0 ? 0 : st;
  };

  componentDidMount() {
    this.aboutUs = document.getElementById('aboutUs');
    this.navImgElement = document.getElementById('navImg');
    this.main = document.getElementById('main');
    this.linkAboutUs = document.getElementById('link-aboutUs');
    this.linkContact = document.getElementById('link-contact');
    this.nav = document.querySelector('.nav-container');
    this.contactElement = document.getElementById('contact');

    this.menu = document.querySelector('.main-aside');
    this.menuButton = document.querySelector('.menu-button');

    if (window.location.pathname === '/') {
      this.main.classList.add('active-main');
      this.setState({
        isMain: true,
      });
    } else {
      this.nav.classList.add('navigation-other');
    }

    if (this.aboutUs) {
      this.scroll = this.aboutUs.offsetTop;
    }
    if (this.navImgElement) {
      this.navImg = this.navImgElement.offsetTop;
    }
    if (this.contactElement) {
      this.contact = this.contactElement.offsetTop;
    }
    document.addEventListener('scroll', this.scrollFunction);

    window.addEventListener('resize', this.resize);
  }

  resize = () => {
    if (window.outerWidth < 768) {
      this.setState({
        phone: true,
      });
    }
  };


  componentWillUnmount() {
    document.removeEventListener('scroll', this.scrollFunction);
  }
}
