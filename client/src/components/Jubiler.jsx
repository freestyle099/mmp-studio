// Jubiler

import React from "react";
import JubilerNavigation from "./JubilerNavigation";
import Carousel from "./Carousel";
import NavigationImages from "./NavigationImages";
import ContactForm from "./ContactForm";

export default class Jubiler extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: []
    };
  }

  render() {
    return (
      <div>
        <JubilerNavigation />
        <Carousel images={this.state.images} />
        <NavigationImages />
        <div>
          <h2>Strona Główna</h2>
          <div className="container jub-info">
            <div>
              Zapraszamy do skorzystania z usług naszej pracowni Jubilersko
              Złotniczej którą prowadzimy od pokoleń w Zakopanem w ofercie
              posiadamy ponad 200 wzorów ręcznie wykonanych obrączek i przy
              wybraniu naszych usług Foto/Video oferujemy rabat na ręcznie
              wykonane obrączki w wysokości -20%.
              <p>
                Jubiler to jeden z zawodów, który wymaga niebywałego poczucia
                estetyki, znajomości trendów w projektowaniu biżuterii, przy
                zachowaniu niepowtarzalnego, własnego stylu. Często używa się
                zamiennie określenia złotnik. W praktyce złotnik jest
                rzemieślnikiem, a jego praca polega na obróbce i wytwarzaniu
                wyrobów z metali szlachetnych, natomiast jubiler zajmuje się
                wyceną, sprzedażą bądź naprawą biżuterii. Jest to jednak umowne
                rozróżnienie, ponieważ najcześciej jubiler jest także
                złotnikiem. Niewątpliwie jubiler to zawód na wagę złota -
                dosłownie i w przenośni. Niesmaowity zmysł estetyczny pozwala
                dopasować projekt do wymagań każdego klienta z osobna.
              </p>
            </div>
            <div>
              <img src="jubiler.jpg" alt="" />
            </div>
          </div>
          <div className="services">
            <div className="container">
              <h2>Usługi</h2>
              <ul>
                <h3>Pracownia Złotnicza poleca swoje usługi w zakresie:</h3>
                <li>
                  Wykonywanie biżuterii złotej z materiałów własnych i
                  powierzonych.
                </li>
                <li>Zmniejszanie i powiększanie pierścionków, obrączek.</li>
                <li>
                  Naprawa starej i współczesnej biżuterii złotej, srebrnej.
                </li>
                <li>Naprawa kopert zegarkowych i bransolet.</li>
                <li>Przewlekanie korali i pereł itp.</li>
                <li>Sprzedaż biżuterii.</li>
                <li>Skup złomu złota, srebra i kamieni szlachetnych.</li>
                <li>Porady fachowe.</li>
              </ul>
            </div>
          </div>
          <ContactForm class="jubiler" />
        </div>
      </div>
    );
  }

  componentDidMount() {
    fetch("/api/jubilers")
      .then(resp => resp.json())
      .then(data =>
        this.setState({
          images: data
        })
      );
  }
}
