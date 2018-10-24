import React from "react";

export default class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [],
      slider: 0
    };
  }

  nextSlide = () => {
    console.log(this.state.images.length);
    this.setState({
      slider:
        this.state.slider >= this.state.images.length - 1
          ? (this.state.slider = 0)
          : this.state.slider + 1
    });
  };

  prevSlide = () => {
    this.setState({
      slider:
        this.state.slider <= 0
          ? (this.state.slider = this.state.images.length - 1)
          : this.state.slider - 1
    });
  };

  render() {
    return (
      <div className="container my-slider">
        <button onClick={this.prevSlide} className="arrows left">left</button>
        <button onClick={this.nextSlide} className="arrows right">
          right
        </button>
        {this.state.images.map((el,index) => {
          return (
            <img
              className={
                this.state.slider === index ? "active-slider slider" : "slider"
              }
              key={index}
              src={el.url}
            />
          );
        })}
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
