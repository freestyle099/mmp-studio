import React from "react";


export default class Contact extends React.Component {

  render() {
    return (
      <div className="contact">
        <div className="container">
          <h2>Kontakt</h2>

          <div>
            <h3>MMPStudio</h3>
            <div className="contact-info">
              <p>jest zarejestrowaną legalną firmą działającą na terenie UE</p>
              <p>z siedzibą Pod Blachówką 2, 34-511 Kościelisko</p>

              <p>NIP: PL736-170-53-69</p>

              <p>
                <b>Kontakt bezpośredni:</b>
              </p>

              <p>Michał Fornalski Jr.</p>
              <p>+48 696 388 885</p>
            </div>
          </div>

        </div>

      </div>
    );
  }
}
