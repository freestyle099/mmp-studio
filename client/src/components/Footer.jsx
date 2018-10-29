import React from "react";
import { Link } from "react-router-dom";

export default class Footer extends React.Component {
  date = new Date();

  render() {
    return (
      <footer className="blue-grey darken-4">
        <div className="container ">
          <div>
            Znajdź nas na facebooku:{" "}
            <a href="https://www.facebook.com/mmpzakopane" target="_blank">
              MMPZakopane
            </a>{" "}
            | <Link to="/regulamin">Regulamin</Link> |{" "}
            <Link to="/polecamy">Polecamy</Link>
          </div>
          <div>
            Copyright &copy; {this.date.getFullYear()} by MMPStudio.pl | All
            rights reserved.
          </div>
        </div>
      </footer>
    );
  }
}
