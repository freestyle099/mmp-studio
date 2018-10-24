import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
  Link
} from "react-router-dom";

// import Carousel from "./components/Carousel";

import "./style/style.scss";

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
  render() {
    return <div>Jubiler Main</div>;
  }
}

class JubilerGallery extends React.Component {
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
          <nav className="main-nav">
            <div className="nav-wrapper container">
              <Link className="brand-logo" to="/">
                <img src="./logo_studio.png" alt="" />
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
              <Link className="brand-logo" to="/fotobudka">
                <img src="logo_fotobudka.png" alt="" />
              </Link>
              <ul className="container navigation right">
                <li>
                  <Link to="/fotobudka">Strona główna</Link>
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
          <nav className="jubiler-nav">
            <div className="nav-wrapper container">
              <Link className="brand-logo" to="/jubiler">
                <img src={"logo_jubiler.png" || "logo_studio.png"} alt="" />
              </Link>
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

class NotFound extends React.Component {
  render() {
    return <div>Not Found</div>;
  }
}

class Home extends React.Component {
  render() {
    return (
      <div>

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
          {/*<Carousel />*/}
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
          <Switch>
            <Route exact path="/" component={MMPStudio} />
            <Route path="/galeria" component={Gallery} />
            <Route path="/kontakt" component={Contact} />
            <Route
              exact
              path="/fotobudka/kontakt"
              component={FotobudkaContact}
            />
            <Route exact path="/jubiler/galeria" component={JubilerGallery} />
            <Route path="/fotobudka" component={Fotobudka} />
            <Route path="/jubiler" component={Jubiler} />
            <Route exact path="/not-found" component={NotFound} />
            <Redirect from="*" to="/not-found" />
          </Switch>
        </div>
      </Router>
    );
  }
  componentDidMount() {
    console.log(this.state.navigation);
    this.setState({
      navigation: "main"
    });
  }
  componentWillUnmount() {
    this.setState({
      navigation: "main"
    });
  }
  // componentDidUpdate() {
  //   if(window.location.href.indexOf('fotobudka') > 0) {
  //     console.log('hi');
  //   }
  // }
}

ReactDOM.render(<App />, document.getElementById("root"));
