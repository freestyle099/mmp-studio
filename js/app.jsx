import React from "react";
import ReactDom from "react-dom";

document.addEventListener("DOMContentLoaded", function() {
  const App = () => <h1>Hello</h1>;

  ReactDom.render(<App />, document.getElementById("app"));
});
