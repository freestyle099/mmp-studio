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
    return (
      <div>
        Hello Fotobudka
      </div>
    );
  }
}
class FotobudkaContact extends React.Component {
  render() {
    return (
      <div>
        Hello Fotobudka Kontakt
      </div>
    );
  }
}


// Navigation
class Navigation extends React.Component {
  render() {
    return (
      <div>
        {this.props.navigation === "main" && (
          <nav>
            <ul className="container navigation">
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
          </nav>
        )}
        {this.props.navigation === "fb" && (
          <nav className='fb-nav'>
            <ul className="container navigation">
              <li>
                <Link to="/fotobudka">Fotobudka</Link>
              </li>
              <li>
                <Link to="/fotobudka/kontakt">Kontakt</Link>
              </li>
            </ul>
          </nav>
        )}
        {/* Jubiler Navigation */}
        {this.props.navigation === "jubiler" && (
          <nav>
            <ul className="container navigation">
              <li>
                <Link to="/jubiler">Jubiler</Link>
              </li>
              <li>
                <Link to="/jubiler/kontakt">Kontakt</Link>
              </li>
            </ul>
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

  changeState = (e) => {
    this.setState({
      navigation: e.target.dataset.state
    })
  }
  render() {
    return (
      <Router>
        <div>
          <Navigation navigation={this.state.navigation}/>
          <ul>
            <li><Link onClick={this.changeState} data-state='main' to='/'>MMPStudio</Link></li>
            <li><Link onClick={this.changeState} data-state='fb' to='/fotobudka'>Fotobudka</Link></li>
            <li><Link onClick={this.changeState} data-state='jubiler' to='/jubiler'>Jubiler</Link></li>
          </ul>

          <Route exact path="/" component={MMPStudio} />
          <Route exact path="/galeria" component={Gallery} />
          <Route exact path="/kontakt" component={Contact} />
          <Route exact path="/fotobudka" component={Fotobudka} />
          <Route exact path="/fotobudka/kontakt" component={FotobudkaContact} />
        </div>
      </Router>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
