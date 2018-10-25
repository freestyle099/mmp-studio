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
      class: 'nav-img-container'
    }
  }

  goToTop = () => {
    return window.scrollTo(0, 0);
  };
  render() {
    return (
      <div className={'nav-img-container ' + this.state.class}>
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
        class: 'nav-img-container-fb'
      })
    }
    if (window.location.href.indexOf("jubiler") > 1) {
      this.setState({
        class: 'nav-img-container-jubiler'
      })
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

class Contact extends React.Component {
  render() {
    return (
      <div>
        <Navigation />
        <div className="container">Kontakt</div>
      </div>
    );
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
        <NavigationImages />
      </div>
    );
  }
}

// Jubiler

class Jubiler extends React.Component {
  render() {
    return (
      <div>
        <JubilerNavigation />
        <div className="container">Jubiler Main</div>
        <NavigationImages />
      </div>
    );
  }
}

class JubilerGallery extends React.Component {
  render() {
    return (
      <div>
        <JubilerNavigation />
        <div className="container">Jubiler Gallery</div>
        <NavigationImages />
      </div>
    );
  }
}

class NotFound extends React.Component {
  render() {
    return <div>Not Found</div>;
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
