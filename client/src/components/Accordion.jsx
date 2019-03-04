import React from 'react';

export default class Accordion extends React.Component {
  showTab = e => {
    const body = e.currentTarget.parentElement.querySelector('.body');
    const allBody = document.querySelectorAll('.body');
    for (let el of allBody) {
      el.classList.remove('active-accordion');
    }

    body.classList.toggle('active-accordion');
  };

  render() {
    return (
      <ul className="accordion">
        <li>
          <div onClick={this.showTab} className="header">
            <strong>Wieloletnie doświadczenie</strong>
          </div>
          <div className="body shadow-sm active-accordion">
            <div className="acc-padding">
              <strong>Fotografią</strong> zajmujemy się od kilkunastu lat, szlifując fach i ciągle starając się rozwijać nasze <strong>umiejętności</strong>. W czasach, gdy <strong>fotografować</strong> może praktycznie każdy warto zaufać <strong>doświadczeniu</strong>.
            </div>
          </div>
        </li>
        <li>
          <div onClick={this.showTab} className="header">
            <strong>Dziesiątki obsłużonych imprez</strong>
          </div>
          <div className="body shadow-sm">
            <div className="acc-padding">
              <strong>Portfolio</strong> dostępne na naszej stronie WWW to ledwie kropla w morzu wszystkich zleceń które wykonaliśmy. Do tej pory obsłużyliśmy kilkaset różnych imprez okolicznościowych, plenerowych i
              masowych. Z chęcią podzielimy się szczegółowym portfolio w trakcie kontaktu.
            </div>
          </div>
        </li>
        <li>
          <div onClick={this.showTab} className="header">
            <strong>Najnowocześniejsze zaplecze sprzętowe</strong>
          </div>
          <div className="body shadow-sm">
            <div className="acc-padding">
              W <strong>fotografii</strong> liczą się niestety nie tylko umiejętności. Nasze zaplecze sprzętowe budujemy od kilku lat, regularnie uzupełniając je o kolejne <strong>aparaty</strong> i obiektywy dostosowane do pracy w
              przeróżnych sytuacjach. Przed przystąpieniem do pracy skrupulatnie badamy środowisko w którym wykonywane będą zdjęcia aby dobrać najlepiej do tego przystosowany sprzęt <strong>fotograficzny</strong>.
            </div>
          </div>
        </li>
        <li>
          <div onClick={this.showTab} className="header">
            Miła atmosfera
          </div>
          <div className="body shadow-sm">
            <div className="acc-padding">
              Każdy Klient jest dla nas szczególny a do każdego zlecenia staramy się podchodzić indywidualnie. Staramy się pracować dyskretnie i z pełnym zaangażowaniem, tak aby Państwa wyjątkowa
              chwila została uwieczniona jako niezwykła <strong>pamiątka</strong>. Każdą ofertę szczegółowo rozpatrujemy, kierując się tak Państwa wytycznymi jak i wspierając się naszym doświadczeniem. Zapraszamy do
              kontaktu!
            </div>
          </div>
        </li>
      </ul>
    );
  }
}
