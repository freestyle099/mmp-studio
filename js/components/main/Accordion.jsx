import React from "react";

export default class Accordion extends React.Component {
  render() {
    return (
      <div className="accordion">
        <div className="container">
          <h2 className="pb-5 pt-5">Dlaczego MMPStudio?</h2>
          <div id="accordion">
            <div className="card">
              <div className="card-header" id="headingOne">
                <h5 className="mb-0">
                  <button
                    className="btn btn-link"
                    data-toggle="collapse"
                    data-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    Wieloletnie doświadczenie
                  </button>
                </h5>
              </div>

              <div
                id="collapseOne"
                className="collapse show"
                aria-labelledby="headingOne"
                data-parent="#accordion"
              >
                <div className="card-body">
                  Fotografią zajmujemy się od kilkunastu lat, szlifując fach i
                  ciągle starając się rozwijać nasze umiejętności. W czasach,
                  gdy fotografować może praktycznie każdy warto zaufać
                  doświadczeniu.
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-header" id="headingTwo">
                <h5 className="mb-0">
                  <button
                    className="btn btn-link collapsed"
                    data-toggle="collapse"
                    data-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    Dziesiątki obsłużonych imprez
                  </button>
                </h5>
              </div>
              <div
                id="collapseTwo"
                className="collapse"
                aria-labelledby="headingTwo"
                data-parent="#accordion"
              >
                <div className="card-body">
                  Portfolio dostępne na naszej stronie WWW to ledwie kropla w
                  morzu wszystkich zleceń które wykonaliśmy. Do tej pory
                  obsłużyliśmy kilkaset różnych imprez okolicznościowych,
                  plenerowych i masowych. Z chęcią podzielimy się szczegółowym
                  portfolio w trakcie kontaktu.
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-header" id="headingThree">
                <h5 className="mb-0">
                  <button
                    className="btn btn-link collapsed"
                    data-toggle="collapse"
                    data-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    Najnowocześniejsze zaplecze sprzętowe
                  </button>
                </h5>
              </div>
              <div
                id="collapseThree"
                className="collapse"
                aria-labelledby="headingThree"
                data-parent="#accordion"
              >
                <div className="card-body">
                  W fotografii liczą się niestety nie tylko umiejętności. Nasze
                  zaplecze sprzętowe budujemy od kilku lat, regularnie
                  uzupełniając je o kolejne aparaty i obiektywy dostosowane do
                  pracy w przeróżnych sytuacjach. Przed przystąpieniem do pracy
                  skrupulatnie badamy środowisko w którym wykonywane będą
                  zdjęcia aby dobrać najlepiej do tego przystosowany sprzęt
                  fotograficzny.
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-header" id="headingFour">
                <h5 className="mb-0">
                  <button
                    className="btn btn-link collapsed"
                    data-toggle="collapse"
                    data-target="#collapseFour"
                    aria-expanded="false"
                    aria-controls="collapseFour"
                  >
                    Miła atmosfera
                  </button>
                </h5>
              </div>
              <div
                id="collapseFour"
                className="collapse"
                aria-labelledby="headingFour"
                data-parent="#accordion"
              >
                <div className="card-body">
                  Każdy Klient jest dla nas szczególny a do każdego zlecenia
                  staramy się podchodzić indywidualnie. Staramy się pracować
                  dyskretnie i z pełnym zaangażowaniem, tak aby Państwa
                  wyjątkowa chwila została uwieczniona jako niezwykła pamiątka.
                  Każdą ofertę szczegółowo rozpatrujemy, kierując się tak
                  Państwa wytycznymi jak i wspierając się naszym doświadczeniem.
                  Zapraszamy do kontaktu!
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
