import React from "react";

export default class FotobudkaPrices extends React.Component {
  render() {
    return (
      <div className="fotobudka-prices">
        <div className="container">
          <h2>Oferta</h2>
          <div className="fotobudka-container">
            <div className="z-depth-1">
              <div className="fotobudka-header">Mini</div>
              <div className="fotobudka-body">
                <div>Zdjęcia bez limitu</div>
                <div>Duży wybór gadżetów!</div>
                <div>Płyta ze wszystkimi zdjęciami</div>
                <div>Galeria on-line</div>
                <div>Dojazd do 20km gratis</div>
                <div>Opieka asystenta</div>
                <div className="fotobudka-empty">X</div>
                <div className="fotobudka-empty">X</div>
                <div className="fotobudka-hour">1 godzina</div>
                <div className="fotobudka-price">550zł</div>
              </div>
            </div>
            <div className="z-depth-1">
              <div className="fotobudka-header">Basic</div>
              <div className="fotobudka-body">
                <div>Zdjęcia bez limitu</div>
                <div>Duży wybór gadżetów!</div>
                <div>Płyta ze wszystkimi zdjęciami</div>
                <div>Galeria on-line</div>
                <div>Dojazd do 30km</div>
                <div>Opieka asystenta</div>
                <div>Własny tekst na zdjęciach</div>
                <div className="fotobudka-empty">X</div>
                <div className="fotobudka-hour">2 godzina</div>
                <div className="fotobudka-price">700zł</div>
              </div>
            </div>
            <div className="z-depth-1">
              <div className="fotobudka-header">Standard</div>
              <div className="fotobudka-body">
                <div>Zdjęcia bez limitu</div>
                <div>Duży wybór gadżetów!</div>
                <div>Płyta ze wszystkimi zdjęciami</div>
                <div>Galeria on-line</div>
                <div>Dojazd do 40km</div>
                <div>Opieka asystenta</div>
                <div>Własny tekst na zdjęciach</div>
                <div className="fotobudka-empty">X</div>
                <div className="fotobudka-hour">3 godzina</div>
                <div className="fotobudka-price">850zł</div>
              </div>
            </div>
            <div className="z-depth-1">
              <div className="fotobudka-header">Extra</div>
              <div className="fotobudka-body">
                <div>Zdjęcia bez limitu</div>
                <div>Duży wybór gadżetów!</div>
                <div>Płyta ze wszystkimi zdjęciami</div>
                <div>Galeria on-line</div>
                <div>Dojazd do 50km</div>
                <div>Opieka asystenta</div>
                <div>Własny tekst na zdjęciach</div>
                <div>Księga gości</div>
                <div className="fotobudka-hour">4 godzina</div>
                <div className="fotobudka-price">1000zł</div>
              </div>
            </div>
          </div>
          <h2>Dodatkowe opcje</h2>
          <div className='fotobudka-additional'>
            <p>Dodatkowa godzina pracy fotobudki: <b>200zł</b></p>
            <p>Dodatkowa kilometr: <b>1zł</b></p>
            <p>Dodatkowe wydruki zdjęć: <b>1zł/szt</b></p>
            <p>Fotoalbum z wybranymi zdjęciami: <b>150zł</b></p>
            <p>Księga gości: <b>150zł</b></p>
            <p>Personalizacja tła: <b>100zł</b></p>
          </div>
        </div>
      </div>
    );
  }
}
