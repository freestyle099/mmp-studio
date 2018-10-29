import React from "react";
import Navigation from "./Navigation";

export default class Gallery extends React.Component {
  images = [
    {
      id: 0,
      url:
        "https://images.unsplash.com/photo-1529348915581-73628f0cf212?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=8d262d07b765c845ff93801a07e15352&auto=format&fit=crop&w=634&q=80"
    },
    {
      id: 1,
      url:
        "https://images.unsplash.com/photo-1522230411790-91c3a622f42e?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=01ef2868a1981f224c292874bd91c82e&auto=format&fit=crop&w=590&q=80"
    },
    {
      id: 2,
      url:
        "https://images.unsplash.com/photo-1524346223600-2b1367f85643?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=143f6c266f744998c4a6d871cf3359f2&auto=format&fit=crop&w=631&q=80"
    }
  ];

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
                    key={el.id}
                    href={el.url}
                    title="Caption for gallery item 1"
                  >
                    <img src={el.url} alt="Gallery image 1" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
