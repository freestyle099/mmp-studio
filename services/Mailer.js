const sendgrid = require("sendgrid");
const helper = sendgrid.mail;
const keys = require("../config/keys");

class Mailer extends helper.Mail {
  constructor({ firstName, surname, email }, content) {
    super();

    this.sgApi = sendgrid(keys.sendGridKey);
    this.from_email = new helper.Email('email@no.com');
    this.subject = "Wiadomość ze strony";
    this.recipients = new helper.Email(email);
    this.body = new helper.Content("text/html", content);

    this.addContent(this.body);
  }

  async send() {
    const request = this.sgApi.emptyRequest({
      method: "POST",
      path: "/v3/mail/send",
      body: this.toJSON()
    });

    const response = this.sgApi.API(request);
    return response;
  }
}

module.exports = Mailer;
