import React from "react";

export default class FotobudkaInfo extends React.Component {
  render() {
    return (
      <div className="container">
        <h2>Czym jest Fotobudka?</h2>
        <div className="fotobudka-info">
          <div>
            <p>
              Fotobudka to magiczne urządzenie z wbudowanym aparatem
              fotograficznym wysokiej klasy, który umożliwia szybkie i
              spontaniczne wykonywanie zdjęć bez udziału fotografa. To świetny
              sposób na integrację i rozhulanie zabawy!
            </p>
            <p>
              Dostarczymy na miejsce gotowe do pracy urządzenie i asystenta,
              który pomoże Twoim gościom samodzielnie korzystać z fotobudki.
              Zapewniamy niezliczoną ilość gadżetów dla gości: okulary,
              kapelusze, peruki, tabliczki czy opaski. Możesz również zamówić
              specjalne tło do zdjęć – tylko na Twoją imprezę.
            </p>
            <p className="pt-2">
              Fotobudka daje pełną wolność w pozowaniu, ze względu na to, że nie
              ma fotografa, stoisz swobodnie, jak przed lustrem i widzisz każdą
              swoją minę w ekranie monitora, przez co masz wpływ na swoją
              kreację :) To naprawdę takie proste! Wspólna zabawa ośmiela
              najbardziej wstydliwych i świetnie integruje.
            </p>
          </div>
          <div>
            <img src="mFotobudka_0141-3.jpg" alt="" />
          </div>
        </div>
      </div>
    );
  }
}
