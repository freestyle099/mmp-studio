import React from 'react';

export default class GoToTop extends React.Component{
  goToTop = e => {
    document.body.scrollIntoView({
      block: 'start',
      behavior: 'smooth',
      inline: 'start'
    })
  }
  render() {
    return (
      <div onClick={this.goToTop} className='go-to-top'>
        Go to Top
      </div>
    );
  }
}