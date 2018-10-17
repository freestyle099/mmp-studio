import React from "react";

export default class Slider extends React.Component {
  images = [
    "https://placeimg.com/640/480/any",
    "https://placeimg.com/640/480/any",
    "https://placeimg.com/640/480/any"
  ];

  render() {
    return (
      <div>
        <div className="container">
          <div id="carouselExampleFade" className="carousel slide carousel-fade" data-ride="carousel">
            <ol className="carousel-indicators">
              {this.images.map((el, index) => {
                return (
                  <li data-target="#carouselExampleFade" data-slide-to={index} className={index === 0 && "active"}/>
                );
              })}
            </ol>
            <div className="carousel-inner">
              {this.images.map((el, index) => {
                return (
                  <div
                    className={
                      index === 0 ? "carousel-item active" : "carousel-item"
                    }
                  >
                    <img className="d-block w-100" src={el} alt="First slide"/>
                  </div>
                );
              })}
            </div>
            <a
              className="carousel-control-prev"
              href="#carouselExampleFade"
              role="button"
              data-slide="prev"
            >
              <span className="carousel-control-prev-icon" aria-hidden="true"/>
              <span className="sr-only">Previous</span>
            </a>
            <a
              className="carousel-control-next"
              href="#carouselExampleFade"
              role="button"
              data-slide="next"
            >
              <span className="carousel-control-next-icon" aria-hidden="true"/>
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div>
      </div>
    );
  }
}
