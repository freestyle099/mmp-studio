import { NavLink } from "react-router-dom";
import React from "react";

export default class AdditionalWork extends React.Component {
  render() {
    return (
      <div className="container additional">
        <h2 className='mb-5 mt-5'>Zajmujemy się jeszcze...</h2>
        <div>
          <NavLink to="/fotobudka">Fotobudka</NavLink>
        </div>
      </div>
    );
  }
}
