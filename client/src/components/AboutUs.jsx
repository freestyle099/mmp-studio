import React from "react";
import Accordion from "./Accordion";

export default class AboutUs extends React.Component {
  render() {
    return (
      <div className='about-us'>
        <div className="container">
          <h2>O nas</h2>
          <div className="center-align">
            <div>
              <img className="img-aboutus" src="mya2.png" alt="" />
            </div>
            <div>
              Jesteśmy rodzinną firmą, w której wieloletnie doświadczenie i
              pasja łączy się z profesjonalnym podejściem do każdego zlecenia.
              <br />
              Początki firmy sięgają 1997 roku od tego czasu nieustannie się
              rozwijamy. <br />W tym momencie na swoim koncie mamy Setki
              obsłużonych Wesel i Dziesiątki Imprez Okolicznościowych. <br />
              Możemy poszczycić się coraz większym zainteresowaniem naszą
              ofertą, oraz bardzo wysoką jakością naszych usług.
              <br />
              Nazwe Firmy tworzą pierwsze litery naszych imion: Ojca i dwóch
              Synów (Michała, Michała i Patryka)
            </div>
          </div>

          <h2>Dlaczego MMPStudio?</h2>
          {/* Accordion */}
          {/*<div className="acc-info">Między innymi:</div>*/}
          <Accordion />
        </div>
      </div>
    );
  }
}
