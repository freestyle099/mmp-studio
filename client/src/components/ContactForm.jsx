import React from "react";

export default class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      surname: "",
      email: "",
      phone: "",
      message: "",
      from: "",
      errors: []
    };
  }

  errors = [];
  errFirst = "Pole Imię nie może być puste i musi być dłuższe niż 3 znaki";
  errSurname = "Pole Nazwisko nie może być puste i musi być dłuższe niż 3 znaki";

  handleFirstName = e => {
    const firstName = e.target.value;
    if (firstName.length < 3) {
      if (this.errors.indexOf(this.errFirst) < 0) {
        this.errors.push(this.errFirst);
      }
      this.setState({
        errors: this.errors
      });
    } else {
      let index = this.errors.indexOf(this.errFirst);
      if (index > -1) {
        this.errors.splice(index, 1);
        this.setState({
          errors: this.errors
        });
      }
    }
    this.setState({
      firstName
    });
  };
  handleSurname = e => {
    const surname = e.target.value;
    if (surname.length < 3) {
      if (this.errors.indexOf(this.errSurname) < 0) {
        this.errors.push(this.errSurname);
      }
      this.setState({
        errors: this.errors
      });
    } else {
      let index = this.errors.indexOf(this.errSurname);
      if (index > -1) {
        this.errors.splice(index, 1);
        this.setState({
          errors: this.errors
        });
      }
    }
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
  handlePhone = e => {
    const phone = e.target.value;
    this.setState({
      phone
    });
  };
  handleMessage = e => {
    const message = e.target.value;
    this.setState({
      message
    });
  };

  resetArray = e => {};

  sendForm = e => {
    e.preventDefault();

    if (this.state.errors.length > 0) {
    } else {
      const obj = {
        from: this.state.from,
        firstName: this.state.firstName,
        surname: this.state.surname,
        email: this.state.email,
        phone: this.state.phone,
        message: this.state.message
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
    }
  };

  render() {
    return (
      <div className={this.props.class + " contact-form"}>
        <div className="container">
          <h2>Formularz kontaktowy</h2>
          <div className="error">
            {this.state.errors.map((el, index) => (
              <div key={index}>{el}</div>
            ))}
          </div>
          <form
            onChange={this.resetArray}
            className="form"
            onSubmit={this.sendForm}
          >
            <input id="type" type="hidden" value={this.props.from} />
            <div>
              <div className="">
                <label htmlFor="first_name">Imię</label>
                <input
                  onChange={this.handleFirstName}
                  id="first_name"
                  type="text"
                  className={this.props.active}
                />
              </div>

              <div className="">
                <label htmlFor="last_name">Nazwisko</label>
                <input
                  onChange={this.handleSurname}
                  id="last_name"
                  type="text"
                  className={this.props.active}
                />
              </div>
              <div className="">
                <label htmlFor="last_name">E-mail</label>
                <input
                  onChange={this.handleEmail}
                  id="last_name"
                  type="email"
                  className={this.props.active}
                />
              </div>
              <div className="">
                <label htmlFor="last_name">Telefon</label>
                <input
                  onChange={this.handlePhone}
                  id="last_name"
                  type="number"
                  className={this.props.active}
                />
              </div>
              <div className="">
                <label htmlFor="last_name">Treść wiadomości</label>
                <textarea
                  onChange={this.handleMessage}
                  className={this.props.active}
                />
              </div>
              <div>
                <button
                  className={
                    this.props.btn + " btn waves-effect waves-light light-blue"
                  }
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
  componentDidMount() {
    const from = document.getElementById("type").value;
    console.log(from);
    this.setState({
      from
    });
  }
}
