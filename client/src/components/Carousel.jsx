import React from "react";

export default class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      slider: 0,
      time: 3000
    };
  }

  play = () => {
    this.id = setInterval(() => {
      this.setState({
        slider:
          this.state.slider >= this.props.images.length - 1
            ? (this.state.slider = 0)
            : this.state.slider + 1
      });
    }, this.state.time);
  };

  nextSlide = () => {
    clearInterval(this.id);
    this.play();
    this.setState({
      slider:
        this.state.slider >= this.props.images.length - 1
          ? (this.state.slider = 0)
          : this.state.slider + 1,
      timer: 3000
    });
  };
  prevSlide = () => {
    clearInterval(this.id);
    this.play();
    this.setState({
      slider:
        this.state.slider <= 0
          ? (this.state.slider = this.props.images.length - 1)
          : this.state.slider - 1
    });
  };

  render() {
    return (
      <div className="container my-slider z-depth-3">
        <button onClick={this.prevSlide} className="arrows left">
          left
        </button>
        <button onClick={this.nextSlide} className="arrows right">
          right
        </button>
        {this.props.images.map((el, index) => {
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
    this.play();
  }
  componentWillUnmount() {
    clearInterval(this.id);
  }
}
