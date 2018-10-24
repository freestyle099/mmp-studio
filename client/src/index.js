import "materialize-css/dist/css/materialize.min.css";
import "./style/style.scss";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

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

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      navigation: "main"
    };
  }

  changeState = (name) => {
    this.setState({
      navigation: name
    })
  }
  render() {
    return (
      <Router>
        <div>
          {this.state.navigation === "main" && (
            <nav>
              <ul className="container navigation">
                <li>
                  <Link to="/">Strona Domowa</Link>
                </li>
                <li>
                  <Link to="/kontakt">Kontakt</Link>
                </li>
              </ul>
            </nav>
          )}

          <ul>
            <li><Link to='/'>MMPStudio</Link></li>
            <li><Link to='/fotobudka'>Fotobudka</Link></li>
            <li><Link to='/jubiler'>Jubiler</Link></li>
          </ul>

          <Route exact path="/" component={MMPStudio} />
          <Route exact path="/kontakt" component={Contact} />
        </div>
      </Router>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
