import React from "react";
import JubilerNavigation from "./JubilerNavigation";

export default class JubilerGallery extends React.Component {
  render() {
    return (
      <div>
        <JubilerNavigation />
        <div className="container">Jubiler Gallery</div>
      </div>
    );
  }
}