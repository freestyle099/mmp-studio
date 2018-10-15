import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, Route, Switch, Redirect, NavLink } from "react-router-dom";

document.addEventListener("DOMContentLoaded", function() {
  class MMPStudio extends React.Component {
    render() {
      return (
        <HashRouter>
          <div>
            <NavLink to="/galeria">Galeria</NavLink>

            <Switch>
              <Route exact path="/home" component={MMPStudioMain} />
              <Route path="/galeria" component={Gallery} />
            </Switch>
          </div>
        </HashRouter>
      );
    }
  }

  class MMPStudioMain extends React.Component {
    render() {
      return <div>Main FB</div>;
    }
  }

  class FBMain extends React.Component {
    render() {
      return <div>Siema fb Main</div>;
    }
  }

  class MMPStudioFotoBudka extends React.Component {
    render() {
      return (
        <HashRouter>
          <div>
            <FotobudkaNavigation />
            <Switch>
              <Route exact path="/fotobudka/home" component={FBMain} />
            </Switch>
          </div>
        </HashRouter>
      );
    }
  }

  class FotobudkaNavigation extends React.Component {
    render() {
      return <div>Siema</div>;
    }
  }

  class Gallery extends React.Component {
    render() {
      return <div>Galeria zdjęć MMP</div>;
    }
  }

  const App = () => {
    return (
      <HashRouter>
        <div>
          <Switch>
            <Route exact path="/" component={MMPStudio} />
            <Route path="/fotobudka" component={MMPStudioFotoBudka} />
            <Route path="/galeria" component={Gallery} />
          </Switch>
        </div>
      </HashRouter>
    );
  };

  ReactDOM.render(<App />, document.getElementById("app"));
});
