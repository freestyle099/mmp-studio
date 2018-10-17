import React from "react";
import { NavLink } from "react-router-dom";
import MMPStudioHeader from "../main/Navigation";
import Slider from "../main/Slider";

export default class MMPStudio extends React.Component {
  images = [
    "https://imageshack.com/a/img921/1383/RDt9w4.jpg",
    "https://imageshack.com/a/img922/1363/gXnaRs.jpg",
    "https://imageshack.com/a/img921/5646/iMaRlb.jpg"
  ];

  render() {
    return (
      <div>
        <MMPStudioHeader />
        <Slider images={this.images} />
        <div className="container">
          Home
          <NavLink to="/fotobudka">Fotobudka</NavLink>
        </div>
      </div>
    );
  }
}
