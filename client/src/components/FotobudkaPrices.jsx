import React from 'react';

export default class FotobudkaPrices extends React.Component {
  render() {
    return (
      <div id="fb-offer" className="fotobudka-prices">
        <div className="container">
          <h2>Oferta</h2>
          <div className="fotobudka-container">
            <div className="shadow-sm">
              <div className="fotobudka-header">Mały</div>
              <div className="fotobudka-body">
                <div>Duży wybór gadżetów!</div>
                <div>Zdjęcia bez limitu</div>
                <div>
                  <strong>Galeria on-line</strong>
                </div>
                <div>Opieka asystenta</div>
                <div>
                  <strong>Dojazd</strong> do 20km
                </div>
                <div className="fotobudka-empty helper helper-height">X</div>
                <div className="fotobudka-empty helper">X</div>
                <div className="fotobudka-empty">X</div>
                <div className="fotobudka-hour">1 godzina</div>
                <div className="fotobudka-price">550zł</div>
              </div>
            </div>
            <div className="shadow-sm">
              <div className="fotobudka-header">Podstawowy</div>
              <div className="fotobudka-body">
                <div>Duży wybór gadżetów!</div>
                <div>Zdjęcia bez limitu</div>
                <div>Galeria on-line</div>
                <div>Opieka asystenta</div>
                <div>Dojazd do 30km</div>
                <div>Własny tekst na zdjęciach</div>
                <div className="fotobudka-empty helper">X</div>
                <div className="fotobudka-empty">X</div>
                <div className="fotobudka-hour">2 godzina</div>
                <div className="fotobudka-price">700zł</div>
              </div>
            </div>
            <div className="shadow-sm">
              <div className="fotobudka-header">Standardowy</div>
              <div className="fotobudka-body">
                <div>Duży wybór gadżetów!</div>
                <div>Zdjęcia bez limitu</div>
                <div>Galeria on-line</div>
                <div>Opieka asystenta</div>
                <div>Dojazd do 40km</div>
                <div>Własny tekst na zdjęciach</div>
                <div>Płyta ze wszystkimi zdjęciami</div>
                <div className="fotobudka-empty">X</div>
                <div className="fotobudka-hour">3 godzina</div>
                <div className="fotobudka-price">850zł</div>
              </div>
            </div>
            <div className="shadow-sm">
              <div className="fotobudka-header">Na bogato</div>
              <div className="fotobudka-body">
                <div>Duży wybór gadżetów!</div>
                <div>Zdjęcia bez limitu</div>
                <div>Galeria on-line</div>
                <div>Opieka asystenta</div>
                <div>Dojazd do 50km</div>
                <div>Własny tekst na zdjęciach</div>
                <div>Płyta ze wszystkimi zdjęciami</div>
                <div>Księga gości</div>
                <div className="fotobudka-hour">4 godzina</div>
                <div className="fotobudka-price">1000zł</div>
              </div>
            </div>
          </div>
          <h2>Dodatkowe opcje</h2>
          <div className="fotobudka-additional">
            <p>
              Dodatkowa godzina pracy <strong>fotobudki</strong>: <b>200zł</b>
            </p>
            <p>
              Dodatkowy kilometr: <b>1zł</b>
            </p>
            <p>
              Dodatkowe wydruki zdjęć: <b>1zł/szt</b>
            </p>
            <p>
              <strong>Fotoalbum</strong> z wybranymi zdjęciami: <b>150zł</b>
            </p>
            <p>
              Księga gości: <b>150zł</b>
            </p>
            <p>
              Personalizacja tła: <b>150zł</b>
            </p>
          </div>
        </div>
      </div>
    );
  }
}
