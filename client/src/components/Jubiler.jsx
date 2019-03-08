// Jubiler

import React from 'react';
import JubilerNavigation from './JubilerNavigation';
import NavigationImages from './NavigationImages';
import SmallCarousel from './SmallCarousel';
import { Helmet } from 'react-helmet';

export default class Jubiler extends React.Component {
  images = [
    {
      id: 1,
      url: process.env.PUBLIC_URL + '/jubiler/1.jpg',
    },
    {
      id: 2,
      url: process.env.PUBLIC_URL + '/jubiler/2.jpg',
    },
    {
      id: 3,
      url: process.env.PUBLIC_URL + '/jubiler/3.jpg',
    },
  ];

  render() {
    return (
      <div>
        <Helmet>
          <title>Profesjonalny jubiler w Zakopanem - Biżuteria na każdą okazję!</title>
          <meta
            name="description"
            content="Szukasz biżuterii swoich marzeń? Zajmujemy się wyrobem biżuterii złotej, srebrnej, różnego typu obrączki, wisiorki, naszyjniki itp. Potrzebujesz biżuterii m.in. na wesela, na zaręczyny czy na własną wymarzoną okazję? Na naszej stronie znajdziesz biżuterię skomponowaną właśnie dla Ciebie!"
          />
          <meta name="robots" content="index, nofollow" />
        </Helmet>
        <div className="con-jub">
          <SmallCarousel images={this.images} />
          <JubilerNavigation />
        </div>
        <NavigationImages />
        <div className="jub-aboutus-phone" id="main-page-jub">
          <div id="jub-aboutUs">
            <h2>O nas</h2>
            <div className="container jub-info">
              <div>
                Zapraszamy do skorzystania z usług naszej <strong>pracowni</strong> Jubilersko Złotniczej którą prowadzimy od pokoleń w <strong>Zakopanem</strong> w ofercie posiadamy ponad 200 wzorów{' '}
                <strong>ręcznie</strong> wykonanych <strong>obrączek</strong> i przy wybraniu naszych usług Foto/Video oferujemy <strong>rabat</strong> na ręcznie wykonane <strong>obrączki</strong> w
                wysokości -20%.
                <p>
                  <strong>Jubiler</strong> to jeden z zawodów, który wymaga niebywałego poczucia <strong>estetyki</strong>, znajomości trendów w <strong>projektowaniu</strong>{' '}
                  <strong>biżuterii</strong>, przy zachowaniu niepowtarzalnego, własnego stylu. Często używa się zamiennie określenia <strong>złotnik</strong>. W praktyce złotnik jest rzemieślnikiem,
                  a jego praca polega na obróbce i wytwarzaniu <strong>wyrobów</strong> z <strong>metali szlachetnych</strong>, natomiast jubiler zajmuje się wyceną, <strong>sprzedażą</strong> bądź{' '}
                  <strong>naprawą</strong> <strong>biżuterii</strong>. Jest to jednak umowne rozróżnienie, ponieważ najcześciej <strong>jubiler</strong> jest także <strong>złotnikiem</strong>.
                  Niewątpliwie jubiler to zawód na wagę <strong>złota</strong> - dosłownie i w przenośni. Niesmaowity zmysł estetyczny pozwala dopasować projekt do wymagań każdego{' '}
                  <strong>klienta</strong> z osobna.
                </p>
              </div>
              <div>
                <img src={process.env.PUBLIC_URL + '/jubiler.jpg'} alt="" />
              </div>
            </div>
          </div>
          <div id="jub-services" className="services">
            <div className="container">
              <h2>Usługi</h2>
              <ul>
                <h3>Pracownia Złotnicza poleca swoje usługi w zakresie:</h3>
                <li>
                  <strong>Wykonywanie biżuterii złotej</strong> z materiałów własnych i powierzonych.
                </li>
                <li>
                  <strong>Zmniejszanie i powiększanie pierścionków, obrączek</strong>.
                </li>
                <li>
                  <strong>Naprawa starej i współczesnej biżuterii złotej, srebrnej</strong>.
                </li>
                <li>
                  <strong>Naprawa kopert zegarkowych i bransolet</strong>.
                </li>
                <li>
                  <strong>Przewlekanie korali i pereł</strong> itp.
                </li>
                <li>
                  <strong>Sprzedaż biżuterii</strong>.
                </li>
                <li>
                  Skup złomu <strong>złota</strong>, <strong>srebra</strong> i <strong>kamieni szlachetnych</strong>.
                </li>
                <li>Porady fachowe.</li>
              </ul>
            </div>
          </div>
          <div id="jub-contact">
            <div className="container">
              <h2>Kontakt</h2>
              <div className="flex-container">
                <div>
                  <p>
                    <strong>Pracownia Jubilersko - Złotnicza</strong>
                  </p>
                  <p>
                    <strong>Michał Fornalski</strong>
                  </p>
                  <p>
                    <strong>Al. 3-go Maja 31</strong>
                  </p>
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
}
