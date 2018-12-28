const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const imageSchema = new mongoose.Schema({
  url: String
});

const Image = mongoose.model('Images', imageSchema);
const Jubiler = mongoose.model('Jubilers', imageSchema);
const Fotobudka = mongoose.model('Fotobudkas', imageSchema);

router.get('/images', async (req, res) => {
  const images = await Image.find();
  res.send(images);
});
router.get('/jubilers', async (req, res) => {
  const jubilers = await Jubiler.find();
  res.send(jubilers);
});
router.get('/fotobudkas', async (req, res) => {
  const fotobudkas = await Fotobudka.find();
  res.send(fotobudkas);
});

module.exports = router;
