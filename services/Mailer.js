const sendgrid = require("sendgrid");
const helper = sendgrid.mail;
const keys = require("../config/keys");

class Mailer extends helper.Mail {
  constructor({ firstName, surname, email }, content) {
    super();

    this.from_email = new helper.Email(email);
    console.log("Email", this.from_email);
    this.subject = "Wiadomość ze strony";
    this.body = new helper.Content("text/html", content);
    console.log('Subject', this.subject);
    console.log('Body', this.body);
  }
}

module.exports = Mailer;
