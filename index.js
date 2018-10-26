const express = require("express");
const mongoose = require("mongoose");
const app = express();
const bodyParser = require("body-parser");
const mail = require("nodemailer").mail;

mongoose
  .connect("mongodb://localhost/playground")
  .then(() => console.log("Connected to mongoDB..."))
  .catch(err => console.log(new Error("Colud not connect to mongoDB", err)));

const imageSchema = new mongoose.Schema({
  url: String
});

const Image = mongoose.model("Images", imageSchema);
const Jubiler = mongoose.model("Jubilers", imageSchema);
const Fotobudka = mongoose.model("Fotobudkas", imageSchema);

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Hi There!");
});

app.get("/api/images", async (req, res) => {
  const images = await Image.find();
  res.send(images);
});
app.get("/api/jubilers", async (req, res) => {
  const jubilers = await Jubiler.find();
  res.send(jubilers);
});
app.get("/api/fotobudkas", async (req, res) => {
  const fotobudkas = await Fotobudka.find();
  res.send(fotobudkas);
});
app.get("/api/images/:id", async (req, res) => {
  const images = await Image.find({ id: req.params.id });
  res.send(images);
});

app.post("/contact", (req, res) => {
  console.log('Body is: ',req.body);


  mail({
    from: "Fred Foo ✔ <foo@blurdybloop.com>", // sender address
    to: "bar@blurdybloop.com, baz@blurdybloop.com", // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello world ✔", // plaintext body
    html: "<b>Hello world ✔</b>" // html body
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Listening on port ${PORT}...`));
