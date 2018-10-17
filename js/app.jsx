import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, Route, Switch, Redirect, NavLink } from "react-router-dom";

import FotobudkaGallery from "./components/fotobudka/FBGallery";
import FotobudkaContact from "./components/fotobudka/FBContact";
import Contact from "./components/main/Contact";
import Gallery from "./components/main/Gallery";
import MMPStudio from "./components/main/Main";
import Fotobudka from "./components/fotobudka/FBMain";

import "bootstrap/scss/bootstrap.scss";
import "../scss/style.scss";

document.addEventListener("DOMContentLoaded", function() {
  const App = () => {
    return (
      <HashRouter>
        <div>
          <Switch>
            <Route exact path="/" component={MMPStudio} />
            <Route path="/galeria" component={Gallery} />
            <Route path="/kontakt" component={Contact} />
            <Route path="/fotobudka/galeria" component={FotobudkaGallery} />
            <Route path="/fotobudka/kontakt" component={FotobudkaContact} />
            <Route path="/fotobudka" component={Fotobudka} />
          </Switch>
        </div>
      </HashRouter>
    );
  };

  ReactDOM.render(<App />, document.getElementById("app"));
});
