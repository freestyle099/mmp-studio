import { Link } from "react-router-dom";
import React from "react";

export default class AdditionalWork extends React.Component {
  render() {
    return (
      <div className='main'>
        <div className="container additional mb-5">
          <h2 className="mb-5 mt-5">Zajmujemy się jeszcze...</h2>
          <div className="images-work">
            <Link className="image-main" to="/">
              <img src="../../../images/logo_studio.png" alt="" />
            </Link>
            <Link className="image-fb" to="/fotobudka">
              <img src="../../../images/logo_fotobudka.png" alt="" />
            </Link>
            <Link className="image-jubiler" to="/fotobudka">
              <img src="../../../images/logo_jubiler.png" alt="" />
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
