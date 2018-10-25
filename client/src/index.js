import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
  Link,
  NavLink
} from "react-router-dom";

import Carousel from "./components/Carousel";
import "./style/style.scss";

class NavigationImages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      class: "nav-img-container"
    };
  }

  goToTop = () => {
    return window.scrollTo(0, 0);
  };
  render() {
    return (
      <div className={"nav-img-container " + this.state.class}>
        <div className="container">
          <h2>Zajmujemy się jeszcze...</h2>
          <div className="navigation-images">
            <div className="valign-wrapper">
              <Link onClick={this.goToTop} to="/">
                <img src="logo_studio.png" alt="" />
              </Link>
            </div>
            <div className="valign-wrapper">
              <Link onClick={this.goToTop} to="/fotobudka">
                <img src="logo_fotobudka.png" />
              </Link>
            </div>
            <div className="valign-wrapper">
              <Link onClick={this.goToTop} to="/jubiler">
                <img src="logo_jubiler.png" alt="" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
  componentDidMount() {
    if (window.location.href.indexOf("fotobudka") > 1) {
      this.setState({
        class: "nav-img-container-fb"
      });
    }
    if (window.location.href.indexOf("jubiler") > 1) {
      this.setState({
        class: "nav-img-container-jubiler"
      });
    }
  }
}

class FBNavigation extends React.Component {
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

class JubilerNavigation extends React.Component {
  render() {
    return (
      <nav className="jubiler-nav">
        <div className="nav-wrapper container">
          <Link className="brand-logo" to="/jubiler">
            <img src="logo_jubiler.png" alt="" />
          </Link>
          <ul className="container navigation right">
            <li>
              <Link to="/jubiler">Strona Główna</Link>
            </li>
            <li>
              <Link to="/jubiler/galeria">Galeria</Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

// Navigation
class Navigation extends React.Component {
  render() {
    return (
      <div>
        <nav className="main-nav">
          <div className="nav-wrapper container">
            <Link className="brand-logo" to="/">
              <img src="./logo_studio.png" alt="" />
            </Link>
            <ul className="container navigation right">
              <li>
                <NavLink exact activeClassName="active-main" to="/">
                  Strona Domowa
                </NavLink>
              </li>
              <li>
                <NavLink exact activeClassName="active-main" to="/galeria">
                  Galeria
                </NavLink>
              </li>
              <li>
                <NavLink exact activeClassName="active-main" to="/kontakt">
                  Kontakt
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

class Accordion extends React.Component {
  showTab = e => {
    const body = e.currentTarget.parentElement.querySelector(".body");
    const allBody = document.querySelectorAll(".body");
    for (let el of allBody) {
      el.classList.remove("active-accordion");
    }

    body.classList.toggle("active-accordion");
  };

  render() {
    return (
      <ul className="accordion">
        <li>
          <div onClick={this.showTab} className="header">
            Wieloletnie doświadczenie
          </div>
          <div className="body z-depth-1-half">
            <div className="acc-padding">
              Fotografią zajmujemy się od kilkunastu lat, szlifując fach i
              ciągle starając się rozwijać nasze umiejętności. W czasach, gdy
              fotografować może praktycznie każdy warto zaufać doświadczeniu.
            </div>
          </div>
        </li>
        <li>
          <div onClick={this.showTab} className="header">
            Dziesiątki obsłużonych imprez
          </div>
          <div className="body z-depth-1-half">
            <div className="acc-padding">
              Portfolio dostępne na naszej stronie WWW to ledwie kropla w morzu
              wszystkich zleceń które wykonaliśmy. Do tej pory obsłużyliśmy
              kilkaset różnych imprez okolicznościowych, plenerowych i masowych.
              Z chęcią podzielimy się szczegółowym portfolio w trakcie kontaktu.
            </div>
          </div>
        </li>
        <li>
          <div onClick={this.showTab} className="header">
            Najnowocześniejsze zaplecze sprzętowe
          </div>
          <div className="body z-depth-1-half">
            <div className="acc-padding">
              W fotografii liczą się niestety nie tylko umiejętności. Nasze
              zaplecze sprzętowe budujemy od kilku lat, regularnie uzupełniając
              je o kolejne aparaty i obiektywy dostosowane do pracy w
              przeróżnych sytuacjach. Przed przystąpieniem do pracy skrupulatnie
              badamy środowisko w którym wykonywane będą zdjęcia aby dobrać
              najlepiej do tego przystosowany sprzęt fotograficzny.
            </div>
          </div>
        </li>
        <li>
          <div onClick={this.showTab} className="header">
            Miła atmosfera
          </div>
          <div className="body z-depth-1-half">
            <div className="acc-padding">
              Każdy Klient jest dla nas szczególny a do każdego zlecenia staramy
              się podchodzić indywidualnie. Staramy się pracować dyskretnie i z
              pełnym zaangażowaniem, tak aby Państwa wyjątkowa chwila została
              uwieczniona jako niezwykła pamiątka. Każdą ofertę szczegółowo
              rozpatrujemy, kierując się tak Państwa wytycznymi jak i wspierając
              się naszym doświadczeniem. Zapraszamy do kontaktu!
            </div>
          </div>
        </li>
      </ul>
    );
  }
}

class AboutUs extends React.Component {
  render() {
    return (
      <div>
        <div className="container">
          <h2>O nas</h2>
          <div className="center-align">
            <img className="img-aboutus" src="mya2.png" alt="" />
          </div>

          <h2>Dlaczego MMPStudio?</h2>
          {/* Accordion */}
          <div className="acc-info">Między innymi:</div>
          <Accordion />
        </div>
      </div>
    );
  }
}

class Contact extends React.Component {
  render() {
    return (
      <div className='contact'>
        <div className="container">Kontakt</div>
      </div>
    );
  }
}

// Main MMPStudio
class MMPStudio extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: []
    };
  }

  render() {
    return (
      <div>
        <Navigation />
        <Carousel images={this.state.images} />
        <NavigationImages />
        <AboutUs />
        <Contact />
      </div>
    );
  }
  componentDidMount() {
    fetch("/api/images")
      .then(resp => resp.json())
      .then(data => {
        this.setState({
          images: data
        });
      });
  }
}



class Gallery extends React.Component {
  render() {
    return (
      <div>
        <Navigation />
        <div className="container">Galeria</div>
      </div>
    );
  }
}

// Fotobudka
class Fotobudka extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: []
    };
  }

  render() {
    return (
      <div>
        <FBNavigation />
        Hello Fotobudka
        <Carousel images={this.state.images} />
        <NavigationImages />
      </div>
    );
  }
  componentDidMount() {
    fetch("/api/fotobudkas")
      .then(resp => resp.json())
      .then(data => {
        this.setState({
          images: data
        });
      });
  }
}

class FotobudkaContact extends React.Component {
  render() {
    return (
      <div>
        <FBNavigation />
        Hello Fotobudka Kontakt
      </div>
    );
  }
}

// Jubiler

class Jubiler extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: []
    };
  }

  render() {
    return (
      <div>
        <JubilerNavigation />
        <Carousel images={this.state.images} />
        <NavigationImages />
      </div>
    );
  }
  componentDidMount() {
    fetch("/api/jubilers")
      .then(resp => resp.json())
      .then(data =>
        this.setState({
          images: data
        })
      );
  }
}

class JubilerGallery extends React.Component {
  render() {
    return (
      <div>
        <JubilerNavigation />
        <div className="container">Jubiler Gallery</div>
      </div>
    );
  }
}

// Main APP
class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={MMPStudio} />
            <Route exact path="/galeria" component={Gallery} />
            <Route exact path="/kontakt" component={Contact} />
            <Route exact path="/fotobudka" component={Fotobudka} />
            <Route exact path="/jubiler" component={Jubiler} />
            <Route
              exact
              path="/fotobudka/kontakt"
              component={FotobudkaContact}
            />
            <Route exact path="/jubiler/galeria" component={JubilerGallery} />
            <Redirect from="*" to="/" />
          </Switch>
        </div>
      </Router>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
