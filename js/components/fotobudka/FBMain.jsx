import React from "react";
import { NavLink } from "react-router-dom";
import FotobudkaNavigation from "../fotobudka/FBNavigation";

export default class Fotobudka extends React.Component {
  render() {
    return (
      <div>
        <FotobudkaNavigation />
        Fotobudka
        <NavLink to="/">MMPStudio</NavLink>
      </div>
    );
  }
}
