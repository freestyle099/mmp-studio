require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const contact = require('./routes/contact');

const PORT = '8000';

app.use(cors());
app.use('/contact', contact);

app.get('/', (req, res) => {
  return res.json({ name: '200 Ok' });
});

app.listen(PORT, () => console.log(`App is listening on port: ${PORT}`));
