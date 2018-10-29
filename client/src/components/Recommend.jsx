import React from "react";
import Navigation from "./Navigation";

export default class Recommend extends React.Component {
  render() {
    return (
      <div>
        <Navigation />
        <div className="container recommend">
          <img src="mlm.png" alt="" />
          <h3>Obsługa Audio Wizualna: Music Light Magic</h3>
          <img src="logo-cpr_0.png" alt="" />
          <h3>Willa & Karczma Cztery Pory Roku: Cztery Pory Roku</h3>
        </div>
      </div>
    );
  }
}
