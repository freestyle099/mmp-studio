import React from "react";
import { NavLink } from "react-router-dom";
import MMPStudioHeader from "../main/Navigation";

export default class MMPStudio extends React.Component {
  render() {
    return (
      <div>
        <MMPStudioHeader />
        <div className="container">
          Home
          <NavLink to="/fotobudka">Fotobudka</NavLink>
        </div>
      </div>
    );
  }
}
