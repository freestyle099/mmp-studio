import React from 'react';

export default class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      slider: 0,
      time: 6000,
    };
  }

  play = () => {
    this.id = setInterval(() => {
      this.setState({
        slider: this.state.slider >= this.props.images.length - 1 ? (this.state.slider = 0) : this.state.slider + 1,
      });
    }, this.state.time);
  };

  clearAndPlay = () => {
    clearInterval(this.id);
    this.play();
  };

  nextSlide = () => {
    this.clearAndPlay();
    this.setState({
      slider: this.state.slider >= this.props.images.length - 1 ? (this.state.slider = 0) : this.state.slider + 1,
    });
  };
  prevSlide = () => {
    this.clearAndPlay();
    this.setState({
      slider: this.state.slider <= 0 ? (this.state.slider = this.props.images.length - 1) : this.state.slider - 1,
    });
  };

  setActiveSlide = e => {
    this.clearAndPlay();
    let slider = +e.currentTarget.dataset.slider;
    this.setState({
      slider: slider,
    });
  };

  render() {
    return (
      <header className="my-slider">
        <button onClick={this.prevSlide} className="arrows left">
          <i className="fas fa-angle-left" />
        </button>
        <button onClick={this.nextSlide} className="arrows right">
          <i className="fas fa-angle-right" />
        </button>
        {this.props.images.map((el, index) => {
          return <img className={this.state.slider === index ? 'active-slider slider' : 'slider'} key={index} src={el.url} alt={el.alt} />;
        })}
        <div className="circle-container">
          {this.props.images.map((el, index) => {
            return (
              <button key={index} onClick={this.setActiveSlide} className="circle-empty" data-slider={index}>
                {this.state.slider === index ? <i className="fas fa-circle" /> : <i className="far fa-circle" />}
              </button>
            );
          })}
        </div>
      </header>
    );
  }
  componentDidMount() {
    this.play();
  }
  componentWillUnmount() {
    clearInterval(this.id);
  }
}
