import React from "react";

export default class Slider extends React.Component {

  render() {
    return (
      <div className={this.props.class}>
        <div className="container pb-5 pt-5">
          <div id="carouselExampleFade" className="carousel slide carousel-fade" data-ride="carousel">
            <ol className="carousel-indicators">
              {this.props.images.map((el, index) => {
                return (
                  <li data-target="#carouselExampleFade" data-slide-to={index} className={index === 0 && "active"}/>
                );
              })}
            </ol>
            <div className="carousel-inner">
              {this.props.images.map((el, index) => {
                return (
                  <div className={index === 0 ? "carousel-item active" : "carousel-item"}>
                    <img className="d-block w-100" src={el} alt="First slide"/>
                  </div>
                );
              })}
            </div>
            <a className="carousel-control-prev" href="#carouselExampleFade" role="button" data-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"/>
              <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleFade" role="button" data-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"/>
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div>
      </div>
    );
  }
}
