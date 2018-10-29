import React from "react";
import Navigation from "./Navigation";

export default class Recommend extends React.Component {
  render() {
    return (
      <div>
        <Navigation />
        <div className="container recommend">
          <img src="mlm.png" alt="" />
          <h3>
            Obsługa Audio Wizualna:{" "}
            <a href="http://www.musiclightmagic.com/" target="_blank">
              Music Light Magic
            </a>
          </h3>
          <img src="logo-cpr_0.png" alt="" />
          <h3>
            Willa & Karczma Cztery Pory Roku:{" "}
            <a
              href="http://www.czteryporyroku.pl/karczma/wesela/pakiety-weselne"
              target="_blank"
            >
              Cztery Pory Roku
            </a>
          </h3>
        </div>
      </div>
    );
  }
}
