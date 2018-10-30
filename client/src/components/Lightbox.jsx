import React from "react";

export default class Lightbox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      openImage: 1
    };
  }

  startLightbox = e => {
    e.preventDefault();
    let index = e.target.dataset.image;
    this.setState({
      openImage: index
    });
    let lightbox = document.querySelector(".lightbox-container");
    lightbox.style.display = "block";
  };

  closeLightbox = e => {
    if (e.target.classList.contains("lightbox")) {
      e.target.parentElement.style.display = "none";
    }
    if (
      e.target.classList.contains("lg-close") ||
      e.target.classList.contains("fa-times")
    ) {
      document.querySelector(".lightbox-container").style.display = "none";
    }
  };

  prevImage = () => {
    this.setState({
      openImage:
        +this.state.openImage <= 0
          ? (this.state.openImage = this.props.images.length - 1)
          : +this.state.openImage - 1
    });
  };

  nextImage = () => {
    this.setState({
      openImage:
        +this.state.openImage >= +this.props.images.length - 1
          ? (this.state.openImage = 0)
          : +this.state.openImage + 1
    });
  };

  render() {
    return (
      <div className="container">
        <h2>Portfolio</h2>
        <div className="row grid-gallery">
          {this.props.images.map(el => {
            return (
              <div
                key={el.id}
                className={
                  el.class ? el.class + " imageGallery1" : "imageGallery1"
                }
              >
                <a
                  onClick={this.startLightbox}
                  href={el.url}
                  title="Caption for gallery item 1"
                >
                  <img src={el.url} data-image={el.id} alt="Gallery image 1" />
                </a>
              </div>
            );
          })}

          <div onClick={this.closeLightbox} className="lightbox-container">
            <div className="lightbox">
              <button onClick={this.closeLightbox} className="lg-close">
                <i className="fas fa-times" />
              </button>
              <button onClick={this.prevImage} className="lg-arrows lg-left">
                <i className="fas fa-caret-left" />
              </button>
              <button onClick={this.nextImage} className="lg-arrows lg-right">
                <i className="fas fa-caret-right" />
              </button>
              <img src={this.props.images[this.state.openImage].url} alt="" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  keyUp = e => {
    if (e.key === "a" || e.key === "ArrowLeft") {
      this.prevImage();
    } else if (e.key === "d" || e.key === "ArrowRight") {
      this.nextImage();
    } else if (e.key === "Escape") {
      document.querySelector(".lightbox-container").style.display = "none";
    } else if (e.key === "Enter") {
      e.preventDefault();
    }
  };

  componentDidMount() {
    document.addEventListener("keydown", this.keyUp);
  }
  componentWillUnmount() {
    document.removeEventListener("keydown", this.keyUp);
  }
}
