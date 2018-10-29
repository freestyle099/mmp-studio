import React from "react";
import Accordion from "./Accordion";

export default class AboutUs extends React.Component {
  render() {
    return (
      <div>
        <div className="container">
          <h2>O nas</h2>
          <div className="center-align">
            <img className="img-aboutus" src="mya2.png" alt="" />
          </div>

          <h2>Dlaczego MMPStudio?</h2>
          {/* Accordion */}
          <div className="acc-info">Między innymi:</div>
          <Accordion />
        </div>
      </div>
    );
  }
}