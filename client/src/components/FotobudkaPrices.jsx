import React from "react";

export default class FotobudkaPrices extends React.Component {
  render() {
    return (
      <div className="fotobudka-prices">
        <div className="container">
          <h2>Oferta</h2>
          <div className="fotobudka-container">
            <div>
              <div className="fotobudka-header">Mini</div>
              <div className='fotobudka-body'>
                <div>Zdjęcia bez limitu</div>
                <div>Duży wybór gadżetów!</div>
                <div>Płyta ze wszystkimi zdjęciami</div>
                <div>Galeria on-line</div>
              </div>
            </div>
            <div>
              <div className="fotobudka-header">Basic</div>
            </div>
            <div>
              <div className="fotobudka-header">Standard</div>
            </div>
            <div>
              <div className="fotobudka-header">Extra</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
