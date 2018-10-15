import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";

document.addEventListener("DOMContentLoaded", function() {

  

  class MMPStudio extends React.Component {
    render() {
      return <div>Hejka</div>;
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
        <div>
          <FotobudkaNavigation />
          <Switch>
            <Route exact path="/fotobudka/home" component={FBMain} />
          </Switch>
        </div>
      );
    }
  }

  class FotobudkaNavigation extends React.Component {
    render() {
      return (
        <div>
          <div>Siema</div>
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
            <Route path="/fotobudka" component={MMPStudioFotoBudka} />
          </Switch>
        </div>
      </HashRouter>
    );
  };

  ReactDOM.render(<App />, document.getElementById("app"));
});
