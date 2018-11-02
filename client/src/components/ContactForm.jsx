import React from "react";

export default class ContactForm extends React.Component {
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
      <div className={this.props.class + " contact-form"}>
        <div className="container">
          <h2>Formularz kontaktowy</h2>
          <form className="form" onSubmit={this.sendForm}>
            <div className="row">
              <div className="col s6">
                <label htmlFor="first_name">Imię</label>
                <input
                  onChange={this.handleFirstName}
                  id="first_name"
                  type="text"
                />
              </div>
              <div className="col s6">
                <label htmlFor="last_name">Nazwisko</label>
                <input
                  onChange={this.handleSurname}
                  id="last_name"
                  type="text"
                />
              </div>
              <div className="col s6">
                <label htmlFor="last_name">E-mail</label>
                <input
                  onChange={this.handleEmail}
                  id="last_name"
                  type="email"
                  className="my-input"
                />
              </div>
              <div className="col s6">
                <label htmlFor="last_name">Telefon</label>
                <input
                  onChange={this.handleEmail}
                  id="last_name"
                  type="email"
                  className="my-input"
                />
              </div>
              <div className="col s12">
                <label htmlFor="last_name">Treść wiadomości</label>
                <textarea onChange={this.handleEmail} className="my-input" />
              </div>
              <div className="col">
                <button
                  className={ this.props.btn + " btn waves-effect waves-light light-blue"}
                  type="submit"
                  name="action"
                >
                  Wyślij
                </button>

              </div>
            </div>


          </form>
        </div>
      </div>
    );
  }
}
