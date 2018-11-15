import React from 'react';

export default class GoToTop extends React.Component {
  goToTop = () => {
    document.body.scrollIntoView({
      block: 'start',
      behavior: 'smooth',
      inline: 'start',
    });
  };
  render() {
    return (
      <div onClick={this.goToTop} className="no-display shadow" id="goToTop">
        <i className="fas fa-arrow-circle-up" />
      </div>
    );
  }
  button;
  detectScrollPosition = () => {
    if (window.scrollY > 200) {
      this.button.classList.add('go-to-top');
    } else {
      if (this.button.classList.contains('go-to-top')) {
        this.button.classList.remove('go-to-top');
      }
    }
  };

  componentDidMount() {
    this.button = document.getElementById('goToTop');
    window.addEventListener('scroll', this.detectScrollPosition);
    if (window.location.pathname.indexOf('fotobudka') > -1) {
      this.button.classList.remove('go-to-top-main');
      this.button.classList.remove('go-to-top-jub');
      this.button.classList.add('go-to-top-fb');
    }
    if (window.location.pathname.indexOf('jubiler') > -1) {
      this.button.classList.remove('go-to-top-main');
      this.button.classList.remove('go-to-top-fb');
      this.button.classList.add('go-to-top-jub');
    }
    if (window.location.pathname === '/') {
      this.button.classList.remove('go-to-top-fb');
      this.button.classList.remove('go-to-top-jub');
      this.button.classList.add('go-to-top-main');
    }
  }
  componentDidUpdate() {
    if (window.location.pathname.indexOf('fotobudka') > -1) {
      this.button.classList.remove('go-to-top-main');
      this.button.classList.remove('go-to-top-jub');
      this.button.classList.add('go-to-top-fb');
    }
    if (window.location.pathname.indexOf('jubiler') > -1) {
      this.button.classList.remove('go-to-top-main');
      this.button.classList.remove('go-to-top-fb');
      this.button.classList.add('go-to-top-jub');
    }
    if (window.location.pathname === '/') {
      this.button.classList.remove('go-to-top-fb');
      this.button.classList.remove('go-to-top-jub');
      this.button.classList.add('go-to-top-main');
    }
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.detectScrollPosition);
  }
}
