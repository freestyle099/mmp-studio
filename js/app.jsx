import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, Route, Switch, Redirect, NavLink } from "react-router-dom";

document.addEventListener("DOMContentLoaded", function() {
  class MMPStudioNavigation extends React.Component {
    render() {
      return (
        <div>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/galeria">Galeria</NavLink>
          <NavLink to="/kontakt">Kontakt</NavLink>
        </div>
      );
    }
  }
  class MMPStudio extends React.Component {
    render() {
      return (
        <div>
          <MMPStudioNavigation />
          Home
          <NavLink to='/fotobudka'>Fotobudka</NavLink>
        </div>
      );
    }
  }

  class Gallery extends React.Component {
    render() {
      return (
        <div>
          <MMPStudioNavigation />
          Galeria
        </div>
      );
    }
  }
  class Contact extends React.Component {
    render() {
      return (
        <div>
          <MMPStudioNavigation />
          Kontakt
        </div>
      );
    }
  }

  class FotobudkaNavigation extends React.Component {
    render() {
      return (
        <div>
          <NavLink to="/fotobudka">Home</NavLink>
          <NavLink to="/fotobudka/galeria">Galeria</NavLink>
          <NavLink to="/fotobudka/kontakt">Kontakt</NavLink>
        </div>
      );
    }
  }

  class Fotobudka extends React.Component {
    render() {
      return (
        <div>
          <FotobudkaNavigation />
          Fotobudka
          <NavLink to='/'>MMPStudio</NavLink>
        </div>
      );
    }
  }

  const App = () => {
    return (
      <HashRouter>
        <div>
          <Switch>
            <Route exact path="/" component={MMPStudio} />
            <Route path="/galeria" component={Gallery} />
            <Route path="/kontakt" component={Contact} />
            <Route path="/fotobudka" component={Fotobudka} />
          </Switch>
        </div>
      </HashRouter>
    );
  };

  ReactDOM.render(<App />, document.getElementById("app"));
});
