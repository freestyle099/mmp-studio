import React from 'react';

export default class FotobudkaInfo extends React.Component {
  render() {
    return (
      <section id="fotobudka-info" className="fb-info-bgc">
        <div className="container">
          <h1>Czym jest Fotobudka?</h1>
          <div className="fotobudka-info">
            <div>
              <p>
                <strong>Fotobudka</strong> to magiczne <strong>urządzenie</strong> z wbudowanym <strong>aparatem</strong> <strong>fotograficznym</strong> wysokiej klasy, który umożliwia szybkie i
                spontaniczne wykonywanie <strong>zdjęć</strong> bez udziału <strong>fotografa</strong>. To świetny sposób na integrację i rozhulanie <strong>zabawy</strong>!
              </p>
              <p>
                Dostarczymy na miejsce gotowe do pracy urządzenie i <strong>asystenta</strong>, który pomoże Twoim gościom <strong>samodzielnie</strong> korzystać z <strong>fotobudki</strong>.
                Zapewniamy niezliczoną ilość <strong>gadżetów</strong> dla gości: <strong>okulary</strong>,<strong>kapelusze</strong>, <strong>perułki</strong>, <strong>tabliczki</strong> czy{' '}
                <strong>opaski</strong>. Możesz również zamówić specjalne tło do zdjęć – tylko na <strong>Twoją imprezę</strong>.
              </p>
              <p className="pt-2">
                <strong>Fotobudka</strong> daje pełną wolność w pozowaniu, ze względu na to, że nie ma <strong>fotografa</strong>, stoisz swobodnie, jak przed lustrem i widzisz każdą swoją minę w
                ekranie <strong>monitora</strong>, przez co masz wpływ na swoją kreację :) To naprawdę takie proste! <strong>Wspólna zabawa</strong> ośmiela najbardziej wstydliwych i świetnie
                integruje.
              </p>
            </div>
            <div>
              <img src={process.env.PUBLIC_URL + '/fotobudka/fotobudka-to-wspaniale-urzadzenie.jpg'} alt="fotobudka to wspaniałe urządzenie" />
            </div>
          </div>
        </div>
      </section>
    );
  }
}
