// Jubiler

import React from 'react';
import JubilerNavigation from './JubilerNavigation';
import Carousel from './Carousel';
import NavigationImages from './NavigationImages';
import ContactForm from './ContactForm';
import SmallCarousel from './SmallCarousel';

export default class Jubiler extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [],
    };
  }

  render() {
    return (
      <div>
        <JubilerNavigation />
        <div className="container">
          <SmallCarousel images={this.state.images} />
        </div>
        <NavigationImages />
        <div id="main-page-jub">
          <div id="jub-aboutUs">
            <h2>O nas</h2>
            <div className="container jub-info">
              <div>
                Zapraszamy do skorzystania z usług naszej pracowni Jubilersko Złotniczej którą prowadzimy od pokoleń w Zakopanem w ofercie posiadamy ponad 200 wzorów ręcznie wykonanych obrączek i przy
                wybraniu naszych usług Foto/Video oferujemy rabat na ręcznie wykonane obrączki w wysokości -20%.
                <p>
                  Jubiler to jeden z zawodów, który wymaga niebywałego poczucia estetyki, znajomości trendów w projektowaniu biżuterii, przy zachowaniu niepowtarzalnego, własnego stylu. Często używa
                  się zamiennie określenia złotnik. W praktyce złotnik jest rzemieślnikiem, a jego praca polega na obróbce i wytwarzaniu wyrobów z metali szlachetnych, natomiast jubiler zajmuje się
                  wyceną, sprzedażą bądź naprawą biżuterii. Jest to jednak umowne rozróżnienie, ponieważ najcześciej jubiler jest także złotnikiem. Niewątpliwie jubiler to zawód na wagę złota -
                  dosłownie i w przenośni. Niesmaowity zmysł estetyczny pozwala dopasować projekt do wymagań każdego klienta z osobna.
                </p>
              </div>
              <div>
                <img src="jubiler.jpg" alt="" />
              </div>
            </div>
          </div>
          <div id="jub-services" className="services">
            <div className="container">
              <h2>Usługi</h2>
              <ul>
                <h3>Pracownia Złotnicza poleca swoje usługi w zakresie:</h3>
                <li>Wykonywanie biżuterii złotej z materiałów własnych i powierzonych.</li>
                <li>Zmniejszanie i powiększanie pierścionków, obrączek.</li>
                <li>Naprawa starej i współczesnej biżuterii złotej, srebrnej.</li>
                <li>Naprawa kopert zegarkowych i bransolet.</li>
                <li>Przewlekanie korali i pereł itp.</li>
                <li>Sprzedaż biżuterii.</li>
                <li>Skup złomu złota, srebra i kamieni szlachetnych.</li>
                <li>Porady fachowe.</li>
              </ul>
            </div>
          </div>
          <div id="jub-contact">
            <div className="container">
              <h2>Kontakt</h2>
              <div className="flex-container">
                <div>
                  <p>Pracownia Jubilersko - Złotnicza</p>
                  <p>Michał Fornalski</p>
                  <p>Al. 3-go Maja 31</p>
                  <p>603 113 844</p>
                </div>
                <div>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2602.0151584533983!2d19.95172831574134!3d49.29505597933268!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4715f2912185c1e7%3A0xf00a232c46719133!2saleja+3+Maja+31%2C+34-500+Zakopane!5e0!3m2!1spl!2spl!4v1542127829640"
                    allowFullScreen
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  componentDidMount() {
    fetch('/api/jubilers')
      .then(resp => resp.json())
      .then(data =>
        this.setState({
          images: data,
        }),
      );
  }
}
