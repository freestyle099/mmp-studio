import React from 'react';
import { Link, NavLink, Redirect } from 'react-router-dom';

export default class FBNavigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isFb: false,
    };
  }

  goto = selector => {
    if (window.location.pathname !== '/fotobudka/') {
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
  goToInfo = () => {
    this.goto('fotobudka-info');
  };
  goToOffer = () => {
    this.goto('fb-offer');
  };
  goToContact = () => {
    this.goto('contact-form');
  };
  goToTop = () => {
    document.body.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  render() {
    return (
      <div className="nav-container-fb">
        <nav className="fb-nav">
          <div className="nav-wrapper container">
            <ul className="container navigation fb">
              <li>
                <Link id="fb-main" onClick={this.goToTop} to="/fotobudka/">
                  Strona główna
                </Link>
              </li>
              <li>
                <Link id="fb-info" onClick={this.goToInfo} to="/fotobudka/">
                  Info
                </Link>
              </li>
              <li>
                <Link id="fb-offerLink" onClick={this.goToOffer} to="/fotobudka/">
                  Oferta
                </Link>
              </li>
              <li className="logo-container">
                <Link onClick={this.goToTop} className="brand-logo" to="/fotobudka/">
                  <img src="logo_fotobudka.png" alt="" />
                </Link>
              </li>
              <li>
                <Link id="fb-contact" to="/fotobudka/" onClick={this.goToContact}>
                  Kontakt
                </Link>
              </li>
              <li>
                <NavLink exact activeClassName="active-fb" to="/fotobudka/galeria">
                  Galeria
                </NavLink>
              </li>
              <li>
                <a href="https://mmpstudio.smugmug.com/StrefaKlienta">Strefa Klienta</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
  fbInfoPosition;
  fbOfferPosition;
  fbContactPosition;
  nav;
  navImg;
  navImgPosition;
  fbMainLink;
  fbInfoLink;
  fbOfferLink;
  fbContactLink;

  scrollFunction = () => {
    if (window.location.pathname === '/fotobudka/') {
      if (window.pageYOffset < this.navImgPosition - 200) {
        this.fbMainLink.classList.add('active-fb');
        this.fbInfoLink.classList.remove('active-fb');
        this.fbOfferLink.classList.remove('active-fb');
        this.fbContactLink.classList.remove('active-fb');
      } else if (window.pageYOffset > this.navImgPosition - 500 && window.pageYOffset < this.fbOfferPosition - 500) {
        this.fbMainLink.classList.remove('active-fb');
        this.fbInfoLink.classList.add('active-fb');
        this.fbOfferLink.classList.remove('active-fb');
        this.fbContactLink.classList.remove('active-fb');
      } else if (window.pageYOffset > this.fbOfferPosition - 500 && window.pageYOffset < this.fbContactPosition - 600) {
        this.fbMainLink.classList.remove('active-fb');
        this.fbInfoLink.classList.remove('active-fb');
        this.fbOfferLink.classList.add('active-fb');
        this.fbContactLink.classList.remove('active-fb');
      } else {
        this.fbMainLink.classList.remove('active-fb');
        this.fbInfoLink.classList.remove('active-fb');
        this.fbOfferLink.classList.remove('active-fb');
        this.fbContactLink.classList.add('active-fb');
      }
    }

    // Detect scroll direction
    let st = window.pageYOffset;

    if (st > this.lastScrollTop) {
      if (this.nav.classList.contains('navigation-container-scroll')) {
        this.nav.classList.remove('entering-fb');
        this.nav.classList.add('leaving-fb');
      }
    } else {
      this.nav.classList.remove('leaving-fb');
      if (window.pageYOffset > this.navImgPosition || window.pageYOffset > 700) {
        this.nav.classList.add('navigation-container-scroll');
        this.nav.classList.add('entering-fb');
      } else {
        if (this.nav.classList.contains('navigation-container-scroll')) {
          this.nav.classList.remove('navigation-container-scroll');
          this.nav.classList.remove('entering-fb');
        }
      }
    }
    this.lastScrollTop = st <= 0 ? 0 : st;
  };
  componentDidMount() {
    document.addEventListener('scroll', this.scrollFunction);
    this.nav = document.querySelector('.nav-container-fb');
    this.navImg = document.getElementById('navImg');
    this.fbMainLink = document.getElementById('fb-main');
    this.fbInfoLink = document.getElementById('fb-info');
    this.fbOfferLink = document.getElementById('fb-offerLink');
    this.fbContactLink = document.getElementById('fb-contact');
    if (this.navImg) {
      this.navImgPosition = this.navImg.offsetTop;
    }
    if (window.location.pathname === '/fotobudka/') {
      this.fbMainLink.classList.add('active-fb');
      this.fbInfoPosition = document.getElementById('fotobudka-info').offsetTop;
      this.fbOfferPosition = document.getElementById('fb-offer').offsetTop;
      this.fbContactPosition = document.getElementById('contact-form').offsetTop;
      this.setState({
        isFb: true,
      });
    }
  }

  componentWillUnmount() {
    document.removeEventListener('scroll', this.scrollFunction);
  }
}
