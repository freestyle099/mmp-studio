import React from 'react';
import Accordion from './Accordion';

export default class AboutUs extends React.Component {
  render() {
    return (
      <section id="aboutUs" className="about-us">
        <div className="container">
          <h2>O nas</h2>
          <div className="about-us-container">
            <div>
              <img src={process.env.PUBLIC_URL + '/mya2.png'} alt="" />
            </div>
            <div>
              <p>
                Jesteśmy rodzinną firmą, w której wieloletnie <strong>doświadczenie</strong> i <strong>pasja</strong> łączy się z <strong>profesjonalnym</strong> podejściem do każdego zlecenia.
              </p>
              <p>Początki firmy sięgają 1997 roku od tego czasu nieustannie się rozwijamy.</p>
              <p>
                W tym momencie na swoim koncie mamy <strong>setki</strong> obsłużonych <strong>Wesel</strong> i Dziesiątki <strong>Imprez</strong> Okolicznościowych.{' '}
              </p>
              <p>
                Możemy poszczycić się coraz większym zainteresowaniem naszą ofertą, oraz bardzo wysoką jakością naszych <strong>usług</strong>.
              </p>
              <p>Nazwe Firmy tworzą pierwsze litery naszych imion: Ojca i dwóch Synów (Michała, Michała i Patryka)</p>
            </div>
          </div>
          <h2>Dlaczego MMPStudio?</h2>
          <Accordion />
        </div>
      </section>
    );
  }
}
