import React from "react";
import Navigation from "./Navigation";

export default class Gallery extends React.Component {
  render() {
    return (
      <div>
        <Navigation />
        <div className="container">
          <h1 className="h1">Portfolio</h1>
          <div className="row">
            <div className="imageGallery1">
              Hejo
            </div>
          </div>
        </div>
      </div>
    );
  }
}
