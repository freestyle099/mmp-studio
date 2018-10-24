import React from "react";

export default class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: []
    };
  }

  render() {
    return (
      <div>
        <div className="carousel carousel-slider">
          {this.state.images.map(el => {
            return (
              <a className="carousel-item">
                <img src={el.url}/>
              </a>
            );
          })}
        </div>
      </div>
    );
  }
  componentDidMount() {
    fetch("/api/images")
      .then(resp => resp.json())
      .then(data => {
        this.setState({
          images: data
        });
      });
  }
}
