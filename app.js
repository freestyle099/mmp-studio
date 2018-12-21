const express = require('express');
const mongoose = require('mongoose');
const app = express();
const Joi = require('joi');
const keys = require('./config/keys');
const bodyParser = require('body-parser');
const prod = require('./config/prod');
const nodemailer = require('nodemailer');
const path = require('path');

const isDev = 'Development';

if(isDev === 'Development') {
// Development
  mongoose
    .connect(
      `mongodb://${keys.database}:${
        keys.databasePassword
        }@mongo30.mydevil.net:27017/${keys.database}`
    )
    .then(() => console.log('Connected to mongoDB...'))
    .catch(err => console.log(new Error('Colud not connect to mongoDB', err)));

} else if(isDev === 'Production') {
  // Production
  mongoose
    .connect(
      `mongodb://${prod.database}:${
        prod.databasePassword
        }@mongo30.mydevil.net:27017/${prod.database}`
    )
    .then(() => console.log('Connected to mongoDB...'))
    .catch(err => console.log(new Error('Colud not connect to mongoDB', err)));

} else if(isDev === 'Local') {
  // Localy Database
  mongoose
    .connect('mongodb://localhost/playground')
    .then(() => console.log('Connected to mongoDB...'))
    .catch(err => console.log(new Error('Colud not connect to mongoDB', err)));
}

const imageSchema = new mongoose.Schema({
  url: String
});

const Image = mongoose.model('Images', imageSchema);
const Jubiler = mongoose.model('Jubilers', imageSchema);
const Fotobudka = mongoose.model('Fotobudkas', imageSchema);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/api/images', async (req, res) => {
  const images = await Image.find();
  res.send(images);
});
app.get('/api/jubilers', async (req, res) => {
  const jubilers = await Jubiler.find();
  res.send(jubilers);
});
app.get('/api/fotobudkas', async (req, res) => {
  const fotobudkas = await Fotobudka.find();
  res.send(fotobudkas);
});

app.post('/contact', (req, res) => {
  const schema = {
    from: Joi.string().required(),
    firstName: Joi.string()
      .min(3)
      .required(),
    surname: Joi.string()
      .min(3)
      .required(),
    email: Joi.string()
      .min(3)
      .email()
      .required(),
    phone: Joi.string()
      .min(3)
      .max(10)
      .required(),
    message: Joi.string()
      .min(10)
      .required()
  };

  const result = Joi.validate(req.body, schema);
  console.log(result);

  let transporter = nodemailer.createTransport({
    host: 'mail30.mydevil.net',
    port: 465,
    secure: true,
    auth: {
      user: prod.username,
      pass: prod.password
    }
  });

  let mailOptions = {
    from: `${req.body.firstName} ${req.body.surname} <${req.body.email}>`,
    cc: prod.username, // list of receivers
    to: `${req.body.firstName} ${req.body.surname} <${req.body.email}>`,
    subject: `Wiadomość - ${req.body.from}`, // Subject line
    text: 'Hello world', // plain text body
    html: `<h3>Dziękujemy za przesłanie wiadomości</h3>
           <h4>Jest to wiadomość automatyczna prosimy na nią nie odpowiadać</h4>
           <h4>Odpowiemy na Państwa wiadomość tak szybko jak będzie to możliwe</h4>
           <div style="color: #424242">
           <div>Imię: ${req.body.firstName}</div> 
           <div>Nazwisko: ${req.body.surname}</div>
           <div>Adres E-mail: ${req.body.email}</div>
           <div>Numer telefonu: ${req.body.phone}</div>
           <div>Treść wiadomości: ${req.body.message}</div></div>
`
  };

  transporter.sendMail(mailOptions, function(err, info) {
    if (err) {
      throw err;
    }

    console.log(info);
  });
});

// Production
app.use(express.static('client/build'));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Listening on port ${PORT}...`));
