import React from "react";
import Navigation from "./Navigation";

export default class Gallery extends React.Component {
  render() {
    return (
      <div>
        <Navigation />
        <div className="container">Galeria</div>
      </div>
    );
  }
}