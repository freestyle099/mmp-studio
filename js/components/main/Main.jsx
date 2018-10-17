import React from "react";
import { NavLink } from "react-router-dom";
import MMPStudioHeader from "../main/Navigation";
import Slider from "../main/Slider";

export default class MMPStudio extends React.Component {
  render() {
    return (
      <div>
        <MMPStudioHeader />
        <Slider/>
        <div className="container">
          Home
          <NavLink to="/fotobudka">Fotobudka</NavLink>
        </div>
      </div>
    );
  }
}
