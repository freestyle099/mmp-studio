import React from "react";
import Navigation from "./Navigation";

export default class Gallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      openImage: 1
    };
  }

  images = [
    {
      id: 0,
      url:
        "https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
    },
    {
      id: 1,
      url:
        "https://images.pexels.com/photos/459225/pexels-photo-459225.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
    },
    {
      id: 2,
      url:
        "https://images.unsplash.com/photo-1524346223600-2b1367f85643?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=143f6c266f744998c4a6d871cf3359f2&auto=format&fit=crop&w=631&q=80"
    }
  ];

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
          ? (this.state.openImage = this.images.length - 1)
          : +this.state.openImage - 1
    });
  };

  nextImage = () => {
    this.setState({
      openImage:
        +this.state.openImage >= +this.images.length - 1
          ? (this.state.openImage = 0)
          : +this.state.openImage + 1
    });
  };

  render() {
    return (
      <div>
        <Navigation />
        <div className="container">
          <h1 className="h1">Portfolio</h1>
          <div className="row">
            <div className="imageGallery1">
              {this.images.map(el => {
                return (
                  <a
                    onClick={this.startLightbox}
                    key={el.id}
                    href={el.url}
                    title="Caption for gallery item 1"
                  >
                    <img
                      src={el.url}
                      data-image={el.id}
                      alt="Gallery image 1"
                    />
                  </a>
                );
              })}
            </div>
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
                <img src={this.images[this.state.openImage].url} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
