import React from "react";

export default class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      surname: "",
      email: ""
    };
  }

  handleFirstName = e => {
    const firstName = e.target.value;
    this.setState({
      firstName
    });
  };
  handleSurname = e => {
    const surname = e.target.value;
    this.setState({
      surname
    });
  };
  handleEmail = e => {
    const email = e.target.value;
    this.setState({
      email
    });
  };

  sendForm = e => {
    e.preventDefault();
    const obj = {
      firstName: this.state.firstName,
      surname: this.state.surname,
      email: this.state.email
    };
    fetch("/contact", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(obj)
    })
      .then(resp => resp.json())
      .then(data => console.log(data));
  };

  render() {
    return (
      <div className="contact">
        <div className="container">
          <h2>Kontakt</h2>
          <div>
            <form onSubmit={this.sendForm}>
              <div className="row">
                <div>
                  <input
                    onChange={this.handleFirstName}
                    id="first_name"
                    type="text"
                  />
                  <label htmlFor="first_name">First Name</label>
                </div>
                <div>
                  <input
                    onChange={this.handleSurname}
                    id="last_name"
                    type="text"
                  />
                  <label htmlFor="last_name">Last Name</label>
                </div>
                <div className="col s6">
                  <input
                    onChange={this.handleEmail}
                    id="last_name"
                    type="email"
                    className="my-input"
                  />
                  <label htmlFor="last_name">E-mail</label>
                </div>
              </div>
              <button
                className="btn waves-effect waves-light light-blue"
                type="submit"
                name="action"
              >
                Wyślij
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}