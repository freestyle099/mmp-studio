import "materialize-css/dist/css/materialize.min.css";
import "./style/style.scss";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

// Main MMPStudio
class MMPStudio extends React.Component {
  render() {
    return (
      <div>
        <div className="container">MMPStudio</div>
      </div>
    );
  }
}
class Contact extends React.Component {
  render() {
    return <div className="container">Kontakt</div>;
  }
}
class Gallery extends React.Component {
  render() {
    return <div className="container">Galeria</div>;
  }
}

// Fotobudka
class Fotobudka extends React.Component {
  render() {
    return <div>Hello Fotobudka</div>;
  }
}
class FotobudkaContact extends React.Component {
  render() {
    return <div>Hello Fotobudka Kontakt</div>;
  }
}

// Jubiler

class Jubiler extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div>Jubiler Main</div>;
  }
}

class JubilerGallery extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div>Jubiler Gallery</div>;
  }
}

// Navigation
class Navigation extends React.Component {
  render() {
    return (
      <div>
        {this.props.navigation === "main" && (
          <nav>
            <div className="nav-wrapper container">
              <Link className='brand-logo' to="/">
                <img
                  src='logo_studio.png'
                  alt=""
                />
              </Link>
              <ul className="container navigation right">
                <li>
                  <Link to="/">Strona Domowa</Link>
                </li>
                <li>
                  <Link to="/galeria">Galeria</Link>
                </li>
                <li>
                  <Link to="/kontakt">Kontakt</Link>
                </li>
              </ul>
            </div>
          </nav>
        )}
        {this.props.navigation === "fb" && (
          <nav className="fb-nav">
            <div className="nav-wrapper container">
              <Link className='brand-logo' to="/fotobudka">
                <img
                  src='logo_fotobudka.png'
                  alt=""
                />
              </Link>
              <ul className="container navigation right">
                <li>
                  <Link to="/fotobudka">Fotobudka</Link>
                </li>
                <li>
                  <Link to="/fotobudka/kontakt">Kontakt</Link>
                </li>
              </ul>
            </div>
          </nav>
        )}
        {/* Jubiler Navigation */}
        {this.props.navigation === "jubiler" && (
          <nav>
            <div className="nav-wrapper container">
              <Link to="/">MMPStudio</Link>
              <ul className="container navigation right">
                <li>
                  <Link to="/jubiler">Jubiler</Link>
                </li>
                <li>
                  <Link to="/jubiler/galeria">Galeria</Link>
                </li>
              </ul>
            </div>
          </nav>
        )}
      </div>
    );
  }
}

// Main APP
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      navigation: "main"
    };
  }

  changeState = e => {
    this.setState({
      navigation: e.target.dataset.state
    });
  };
  render() {
    return (
      <Router>
        <div>
          <Navigation navigation={this.state.navigation} />
          <div className="container">
            <ul>
              <li>
                <Link onClick={this.changeState} data-state="main" to="/">
                  MMPStudio
                </Link>
              </li>
              <li>
                <Link
                  onClick={this.changeState}
                  data-state="fb"
                  to="/fotobudka"
                >
                  Fotobudka
                </Link>
              </li>
              <li>
                <Link
                  onClick={this.changeState}
                  data-state="jubiler"
                  to="/jubiler"
                >
                  Jubiler
                </Link>
              </li>
            </ul>
          </div>
          <Route exact path="/" component={MMPStudio} />
          <Route exact path="/galeria" component={Gallery} />
          <Route exact path="/kontakt" component={Contact} />
          <Route exact path="/fotobudka" component={Fotobudka} />
          <Route exact path="/jubiler" component={Jubiler} />{" "}
          <Route exact path="/fotobudka" component={Fotobudka} />
          <Route exact path="/jubiler/galeria" component={JubilerGallery} />
        </div>
      </Router>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
