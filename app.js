const express = require('express');
const app = express();
const api = require('./routes/api');
const contact = require('./routes/contact');
const bodyParser = require('body-parser');
const path = require('path');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/api', api);
app.use('/contact', contact);

const mongoose = require('mongoose');
const prod = require('./config/prod');
const keys = require('./config/keys');

// Development
// mongoose
//   .connect('mongodb://localhost/playground')
//   .then(() => console.log('Connected to mongoDB...'))
//   .catch(err => console.log(new Error('Colud not connect to mongoDB', err)));

const mongoConnection = mode => {
  return mongoose
    .connect(
      `mongodb://${mode.database}:${
        mode.databasePassword
      }@mongo30.mydevil.net:27017/${mode.database}`
    )
    .then(() => console.log('Connected to mongoDB...'))
    .catch(err => console.log(new Error('Colud not connect to mongoDB', err)));
};

mongoConnection(keys);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
  });
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Listening on port ${PORT}...`));
