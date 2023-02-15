const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const Joi = require('joi');
const sgMail = require('@sendgrid/mail');
const emailTemplate = require('../templates/email');

router.use(bodyParser.json());

router.post('/', (req, res) => {
  const schema = Joi.object({
    name: Joi.string().min(3).max(100).required(),
    surname: Joi.string().min(3).max(100).required(),
    email: Joi.string().email().required(),
    phone: Joi.string().min(9).max(12).required(),
    message: Joi.string().min(10).max(1000).required(),
  });
  const result = schema.validate(req.body);
  if (result.error) {
    return res.status(500).send(result.error);
  }
  if (process.env.MMPSTUDIO_SENDGRID) {
    sgMail.setApiKey(process.env.MMPSTUDIO_SENDGRID);
  } else {
    return res.status(500).send('Bad sendgrid token');
  }
  const { email } = req.body;
  const ourEmail = 'kontakt@mmpstudio.pl';

  const msg = {
    to: email,
    cc: ourEmail,
    from: `MMPStudio - kontakt <${ourEmail}>`, // Use the email address or domain you verified above
    subject: `Wiadomość ze strony`,
    html: emailTemplate(req.body),
  };

  // ES8
  (async () => {
    try {
      await sgMail.send(msg).then((resp) => res.status(200).send(resp));
    } catch (error) {
      res.status(500).send(error);
    }
  })();
});

module.exports = router;
