import React from "react";

export default class GoToTop extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      class: 'no-display'
    };
  }

  goToTop = e => {
    document.body.scrollIntoView({
      block: "start",
      behavior: "smooth",
      inline: "start"
    });
  };
  render() {
    if(window.location.pathname.indexOf('fotobudka') > -1) {
     this.button.classList.remove('go-to-top-main');
    }
    if(window.location.pathname === '/') {
      this.button.classList.add('go-to-top-main');
    }
    return (
      <div onClick={this.goToTop} className={this.state.class} id="goToTop">
        <i className="fas fa-arrow-circle-up"></i>
      </div>
    );
  }
  button;
  detectScrollPosition = () => {
    if (window.scrollY > 200) {
      this.button.classList.add("go-to-top");
    } else {
      if (this.button.classList.contains("go-to-top")) {
        this.button.classList.remove("go-to-top");
      }
    }
  }

  componentDidMount() {
    this.button = document.getElementById("goToTop");
    window.addEventListener("scroll", this.detectScrollPosition);

  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.detectScrollPosition);
  }
}
