import React from "react";
import MMPStudioHeader from "../main/Navigation";

let result = fetch("http://localhost:3000/api/dane")
  .then(resp => resp.json())
  .then(data => {
    console.log(data);
  });

export default class Contact extends React.Component {
  render() {
    return (
      <div>
        <MMPStudioHeader />
        Kontakt
      </div>
    );
  }
}
