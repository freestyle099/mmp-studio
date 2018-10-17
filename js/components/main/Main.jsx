import React from "react";
import MMPStudioHeader from "../main/Navigation";
import AdditionalWork from "../main/AdditionalWork";
import Slider from "../main/Slider";
import Accordion from "../main/Accordion";

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
        <Slider class="bg-color-slider main" images={this.images} />
        <AdditionalWork/>
        <Accordion/>
      </div>
    );
  }
}
